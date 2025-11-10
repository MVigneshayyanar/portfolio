import { useState, useEffect, useRef } from 'react';

const useViewCounter = () => {
  const [totalViews, setTotalViews] = useState(0);
  const [liveViewers, setLiveViewers] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    // Generate unique session ID
    const generateSessionId = () => {
      return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    };

    sessionIdRef.current = generateSessionId();

    // REAL-TIME USING BROADCASTCHANNEL (Works across browser tabs)
    console.log('🚀 Real-time view counter active! Open multiple tabs to see live updates.');
    
    const channel = new BroadcastChannel('portfolio_viewers');
    const sessionId = sessionIdRef.current;

    // Get initial data from localStorage
    const storedViews = localStorage.getItem('portfolioTotalViews');
    const lastVisit = localStorage.getItem('portfolioLastVisit');
    const currentTime = Date.now();
    
    // Track new visits (30-minute threshold)
    const isNewVisit = !lastVisit || (currentTime - parseInt(lastVisit)) > 30 * 60 * 1000;
    
    if (isNewVisit) {
      const newTotalViews = storedViews ? parseInt(storedViews) + 1 : 1;
      setTotalViews(newTotalViews);
      localStorage.setItem('portfolioTotalViews', newTotalViews.toString());
      localStorage.setItem('portfolioLastVisit', currentTime.toString());
    } else {
      setTotalViews(storedViews ? parseInt(storedViews) : 1);
    }

    // Track active tabs/viewers with timestamps
    const activeTabs = new Map();
    activeTabs.set(sessionId, Date.now());
    setLiveViewers(1);

    // Announce presence
    const announcePresence = () => {
      channel.postMessage({
        type: 'PRESENCE',
        sessionId: sessionId,
        timestamp: Date.now()
      });
    };

    // Initial announcement
    announcePresence();

    // Request other tabs to announce themselves after a short delay
    setTimeout(() => {
      channel.postMessage({ type: 'REQUEST_PRESENCE' });
    }, 100);

    // Listen for messages from other tabs
    channel.onmessage = (event) => {
      const { type, sessionId: otherSessionId, timestamp } = event.data;

      if (type === 'PRESENCE') {
        if (otherSessionId !== sessionId) {
          activeTabs.set(otherSessionId, timestamp);
        }
        setLiveViewers(activeTabs.size);
      } else if (type === 'REQUEST_PRESENCE') {
        announcePresence();
      } else if (type === 'DISCONNECT' && otherSessionId !== sessionId) {
        activeTabs.delete(otherSessionId);
        setLiveViewers(activeTabs.size);
      }
    };

    // Announce presence and clean stale sessions every 3 seconds
    const presenceInterval = setInterval(() => {
      announcePresence();
      
      // Clean up stale sessions (older than 10 seconds)
      const now = Date.now();
      let changed = false;
      activeTabs.forEach((lastSeen, id) => {
        if (id !== sessionId && now - lastSeen > 10000) {
          activeTabs.delete(id);
          changed = true;
        }
      });
      
      if (changed) {
        setLiveViewers(activeTabs.size);
      }
    }, 3000);

    // Announce disconnect when tab closes
    const handleBeforeUnload = () => {
      channel.postMessage({
        type: 'DISCONNECT',
        sessionId: sessionId
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Handle visibility change (tab becomes hidden/visible)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        announcePresence();
        setTimeout(() => {
          channel.postMessage({ type: 'REQUEST_PRESENCE' });
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(presenceInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      channel.postMessage({
        type: 'DISCONNECT',
        sessionId: sessionId
      });
      channel.close();
    };
  }, []);

  return { totalViews, liveViewers, isOnline };
};

export default useViewCounter;
