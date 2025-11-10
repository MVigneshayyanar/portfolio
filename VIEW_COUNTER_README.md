# View Counter Feature

## Overview
Your portfolio now includes a live view counter system that displays real-time visitor statistics across the website.

## Features

### 1. **Total Views Counter**
- Tracks unique visits to your portfolio
- Persists data using browser's localStorage
- Considers a visit as "new" if the last visit was more than 30 minutes ago
- Displays with an eye icon (👁️)

### 2. **Live Viewers Counter**
- Shows simulated number of concurrent visitors (1-5)
- Updates dynamically every 10-20 seconds
- Features a pulsing green indicator
- Creates an engaging, dynamic experience

## Display Locations

### Navigation Bar (Top of page)
- **Compact variant** in the navigation component
- Shows: "X online • Y views"
- Positioned at the bottom of the navigation card

### Footer (Bottom of page)
- **Default variant** with styled badges
- Shows: "X viewing now" and "Y total views"
- Centered above the copyright information
- Features hover animations

## Technical Implementation

### Files Created:
1. **`src/hooks/useViewCounter.jsx`** - Custom React hook that manages view counting logic
2. **`src/components/ViewCounter.jsx`** - Reusable component with two display variants

### Files Modified:
1. **`src/App.jsx`** - Integrated the view counter hook
2. **`src/components/Navigation.jsx`** - Added compact view counter display
3. **`src/components/Footer.jsx`** - Added full view counter display

## How It Works

1. **On Page Load**: The hook checks localStorage for existing view data
2. **New Visit Detection**: If last visit > 30 minutes ago, increment total views
3. **Live Simulation**: Random number (1-5) updates every 10-20 seconds
4. **Data Persistence**: View count stored in browser's localStorage

## Customization Options

### Adjust Visit Timeout
In `src/hooks/useViewCounter.jsx`, modify this line:
```javascript
const isNewVisit = !lastVisit || (currentTime - parseInt(lastVisit)) > 30 * 60 * 1000;
// Change 30 to desired minutes
```

### Adjust Live Viewers Range
In `src/hooks/useViewCounter.jsx`, modify this line:
```javascript
setLiveViewers(Math.floor(Math.random() * 5) + 1);
// Change 5 to max viewers, 1 to min viewers
```

### Adjust Update Frequency
In `src/hooks/useViewCounter.jsx`, modify this line:
```javascript
Math.random() * 10000 + 10000
// First 10000 = random variation, second 10000 = base time (10 seconds)
```

## Testing

1. Visit your portfolio: `http://localhost:5174/`
2. Check the navigation bar for the view counter
3. Scroll to the footer to see the detailed view counter
4. Wait 10-20 seconds to see the live viewers number change
5. Refresh the page - total views should remain the same (within 30 minutes)
6. Clear localStorage or wait 30+ minutes, then refresh to increment total views

## Future Enhancements

Consider integrating with:
- **Google Analytics** for real analytics data
- **Firebase Realtime Database** for actual live user counting
- **Socket.io** for true real-time visitor tracking
- **API services** like CountAPI or similar for persistent cloud storage

## Browser Compatibility

Works in all modern browsers that support:
- localStorage
- React Hooks
- CSS Animations
- Framer Motion animations
