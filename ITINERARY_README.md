# Itinerary Plan Page - Documentation

## Overview

A comprehensive travel itinerary dashboard has been created for the quotation-builder-app, based on the HTML reference provided. The implementation uses React, TypeScript, Tailwind CSS, and Framer Motion for animations.

## Features Implemented

### 1. **Full Itinerary Display**
- Day-by-day breakdown of travel activities
- Timeline view with visual indicators
- Detailed activity information including:
  - Time and duration
  - Descriptions and subtitles
  - Tags and metadata
  - Pickup details (for airport transfers)
  - Guidelines and important information
  - Nearby breakfast spots

### 2. **Package Information Header**
- Package title, subtitle, and ID
- User greeting
- Travel duration
- Traveler details breakdown (Adults, Children, Infants)
- Package statistics (Days, Nights, Destinations, Rating)

### 3. **Navigation Tabs**
- **Detailed Itinerary**: Full day-by-day plan
- **Share Feedback**: Form to submit travel feedback
- **Report Issues**: Form to report problems during the trip

### 4. **Sidebar Navigation**
- Day selector with visual indicators
- Emergency contact information
- Tour guide details
- Package manager contact

### 5. **Interactive Features**
- Expandable guidelines for each activity
- Photo gallery modals
- Hotel location maps (embeddable)
- Activity rating system (Like/Dislike/Neutral)
- Comment submission for activities
- Recent reviews display

### 6. **Accommodation Details**
- Hotel information with ratings
- Website links
- Interactive maps
- Nearby breakfast spot listings

### 7. **Meal Planning**
- Breakfast, lunch, and dinner details
- Restaurant information
- Cuisine types

## File Structure

```
src/
├── la-fortuna/
│   ├── pages/
│   │   ├── LoginPage.tsx (Updated)
│   │   └── ItineraryPlanPage.tsx (New)
│   ├── components/
│   │   ├── ItineraryHeader.tsx (New)
│   │   ├── ItinerarySidebar.tsx (New)
│   │   ├── ItineraryDayContent.tsx (New)
│   │   ├── ActivityTimeline.tsx (New)
│   │   ├── ActivityCard.tsx (New)
│   │   ├── ItineraryFeedbackTab.tsx (New)
│   │   └── ItineraryIssuesTab.tsx (New)
│   └── types/
│       └── itinerary.ts (New)
└── App.tsx (Updated with new route)
```

## Routes

- `/` - Login page
- `/itinerary-plan` - Main itinerary dashboard

## Usage

### 1. **Starting the Application**

```bash
npm run dev
```

Navigate to `http://localhost:5173` (or your configured port)

### 2. **Login Flow**

1. Enter Package ID (e.g., LF-MUN-2025-001)
2. Enter your name
3. Click "Access My Package"
4. You'll be redirected to the itinerary plan page

### 3. **Navigating the Itinerary**

- **Select a Day**: Click on any day in the sidebar to view that day's activities
- **View Activity Details**: Each activity card shows time, duration, description, and tags
- **Expand Guidelines**: Click "View Guidelines" to see important instructions
- **View Photos**: Click "View Photos" to open the photo gallery
- **Show Maps**: Click "Show on Map" to view hotel location
- **Rate Activities**: Select Like/Dislike/Neutral and add comments
- **Submit Feedback**: Switch to "Share Feedback" tab to provide overall trip feedback
- **Report Issues**: Switch to "Report Issues" tab to report problems

## Data Structure

The itinerary data is currently mocked in `ItineraryPlanPage.tsx`. To connect to a real API:

1. Create an API service in `src/services/itinerary.ts`
2. Replace the `mockPackageData` with an API call
3. Add loading states and error handling

Example API service:

```typescript
// src/services/itinerary.ts
export async function getItineraryByPackageId(packageId: string) {
  const response = await fetch(`/api/itinerary/${packageId}`);
  if (!response.ok) throw new Error('Failed to fetch itinerary');
  return response.json();
}
```

Then in `ItineraryPlanPage.tsx`:

```typescript
const [packageData, setPackageData] = useState<ItineraryPackage | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  getItineraryByPackageId(userData.packageId)
    .then(data => {
      setPackageData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
}, []);
```

## Customization

### Colors

The color scheme uses yellow/gold as the primary accent color. To change:

1. Update Tailwind classes in components (e.g., `from-yellow-600 to-yellow-400`)
2. Modify the gradient colors in headers and buttons

### Mock Data

Current mock data includes only Day 1 activities. To add more days:

1. Open `src/la-fortuna/pages/ItineraryPlanPage.tsx`
2. Add more day objects to the `mockPackageData.days` array
3. Follow the structure of the existing Day 1 data

Example:

```typescript
{
  overview: {
    dayNumber: 2,
    title: 'Exploring Munnar',
    date: 'Tue, Sep 16',
    fullDate: 'Tuesday, September 16, 2025',
    // ... rest of the day data
  },
  activities: [
    // ... activity objects
  ]
}
```

## TypeScript Types

All itinerary-related types are defined in `src/la-fortuna/types/itinerary.ts`:

- `ItineraryPackage` - Complete package data
- `Day` - Single day information
- `Activity` - Activity details
- `Hotel` - Accommodation information
- `TravelerInfo` - Traveler breakdown
- `ContactInfo` - Contact details
- And more...

## Components Breakdown

### ItineraryHeader
Displays package information, traveler details, and statistics

**Props:**
- `packageData: ItineraryPackage`

### ItinerarySidebar
Shows day navigation and contact information

**Props:**
- `days: Day[]`
- `currentDay: number`
- `onDayChange: (day: number) => void`
- `contacts: ItineraryPackage['contacts']`

### ItineraryDayContent
Displays day overview and activity timeline

**Props:**
- `day: Day`
- `packageId: string`

### ActivityTimeline
Renders timeline with all activities

**Props:**
- `activities: Activity[]`

### ActivityCard
Individual activity card with all details

**Props:**
- `activity: Activity`
- `index: number`

### ItineraryFeedbackTab
Feedback submission form

**Props:**
- `packageId: string`

### ItineraryIssuesTab
Issue reporting form

**Props:**
- `packageId: string`

## Features to Add (Future Enhancements)

1. **Backend Integration**
   - Connect to real API for itinerary data
   - Save feedback and issues to database
   - Store activity ratings

2. **User Authentication**
   - Secure login with JWT tokens
   - Session management
   - Role-based access control

3. **Photo Gallery**
   - Real photo uploads
   - Image carousel
   - Zoom functionality

4. **Export Features**
   - PDF export of itinerary
   - Email itinerary
   - Print-friendly view

5. **Notifications**
   - Email reminders for upcoming activities
   - SMS notifications
   - Push notifications

6. **Multi-language Support**
   - i18n integration
   - Language selector

7. **Offline Support**
   - Service worker for PWA
   - Offline data caching
   - Sync when online

8. **Calendar Integration**
   - Export to Google Calendar
   - iCal format support
   - Calendar sync

## Troubleshooting

### Images Not Loading

If the logo image doesn't load, update the path in `ItineraryHeader.tsx`:

```typescript
<img
  src="/path/to/your/logo.png"  // Update this path
  alt="La Fortuna Logo"
  className="max-h-20 w-auto bg-gradient-to-br from-green-800 to-green-950 rounded-2xl block"
/>
```

### Maps Not Displaying

Ensure the `mapUrl` in accommodation data contains a valid Google Maps embed URL.

### TypeScript Errors

Run type checking:

```bash
npm run type-check
```

Or in VSCode, check the "Problems" panel.

## Performance Optimization

The implementation uses:

1. **Framer Motion** for smooth animations
2. **Lazy loading** with React Suspense
3. **Code splitting** via React Router
4. **Memoization** opportunities for expensive computations (can be added)

To further optimize:

```typescript
import { memo, useMemo } from 'react';

export const ActivityCard = memo(({ activity, index }: ActivityCardProps) => {
  // Component code
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the quotation-builder-app.

---

**Created:** 2025-01-24
**Version:** 1.0.0
**Author:** Claude Code
