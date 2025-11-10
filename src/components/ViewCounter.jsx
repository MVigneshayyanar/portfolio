import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ViewCounter({ totalViews, liveViewers, variant = 'default' }) {
  const [pulse, setPulse] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Create a pulse effect when live viewers change
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(timer);
  }, [liveViewers]);

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 text-xs sm:text-sm">
        {/* Live Viewers */}
        <motion.div 
          className="flex items-center gap-1.5 relative"
          onHoverStart={() => setShowTooltip(true)}
          onHoverEnd={() => setShowTooltip(false)}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ 
              scale: pulse ? [1, 1.3, 1] : 1,
              boxShadow: pulse 
                ? ['0 0 0 0 rgba(74, 222, 128, 0.7)', '0 0 0 8px rgba(74, 222, 128, 0)', '0 0 0 0 rgba(74, 222, 128, 0)']
                : '0 0 0 0 rgba(74, 222, 128, 0)'
            }}
            transition={{ duration: 0.6 }}
          />
          <motion.span 
            className="text-green-400 font-semibold"
            animate={{ scale: pulse ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {liveViewers}
          </motion.span>
          <span className="text-text-muted">online</span>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-8 left-0 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50"
              >
                Real-time viewers
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <span className="text-text-muted">•</span>
        
        {/* Total Views */}
        <div className="flex items-center gap-1.5">
          <i className="fas fa-eye text-tertiary"></i>
          <span className="text-tertiary font-semibold">
            {totalViews.toLocaleString()}
          </span>
          <span className="text-text-muted">views</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      {/* Live Viewers Badge */}
      <motion.div 
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        animate={{ 
          borderColor: pulse ? ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.3)'] : 'rgba(34, 197, 94, 0.3)'
        }}
      >
        <motion.div 
          className="w-2.5 h-2.5 rounded-full bg-green-400"
          animate={{ 
            scale: pulse ? [1, 1.5, 1] : [1, 1.2, 1],
            opacity: [1, 0.6, 1]
          }}
          transition={{ 
            duration: pulse ? 0.6 : 2,
            repeat: pulse ? 0 : Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.span 
          className="text-green-400 font-bold text-sm"
          animate={{ scale: pulse ? [1, 1.15, 1] : 1 }}
        >
          {liveViewers}
        </motion.span>
        <span className="text-green-300 text-xs font-medium">viewing now</span>
        
        {/* Ripple effect on pulse */}
        <AnimatePresence>
          {pulse && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-400"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Total Views Badge */}
      <motion.div 
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <i className="fas fa-eye text-secondary text-sm"></i>
        <span className="text-secondary font-bold text-sm">
          {totalViews.toLocaleString()}
        </span>
        <span className="text-tertiary text-xs font-medium">total views</span>
      </motion.div>
    </div>
  );
}

export default ViewCounter;
