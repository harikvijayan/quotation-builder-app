// Itinerary Type Definitions

export interface TravelerInfo {
  adults: number;
  children: number;
  infants: number;
}

export interface PackageStats {
  days: number;
  nights: number;
  destinations: number;
  rating: number;
}

export interface Hotel {
  name: string;
  rating: string;
  website?: string;
  mapUrl?: string;
  nearbyBreakfastSpots?: Array<{
    name: string;
    distance: string;
  }>;
}

export interface PickupDetails {
  driver: string;
  phone: string;
  vehicle: string;
  location: string;
  backupContact: string;
}

export interface ActivityMeta {
  icon: string;
  text: string;
}

export interface ActivityReview {
  author: string;
  text: string;
  rating?: number;
}

export interface Activity {
  id: string;
  time: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  meta: ActivityMeta[];
  guidelines?: string[];
  photos?: number;
  pickupDetails?: PickupDetails;
  nearbyBreakfastSpots?: Array<{
    name: string;
    distance: string;
  }>;
  reviews?: ActivityReview[];
  averageRating?: number;
  totalReviews?: number;
}

export interface Meal {
  type: 'breakfast' | 'lunch' | 'dinner';
  label: string;
  value: string;
}

export interface DayOverview {
  dayNumber: number;
  title: string;
  date: string;
  fullDate: string;
  weather?: string;
  meals: Meal[];
  accommodation: Hotel;
}

export interface Day {
  overview: DayOverview;
  activities: Activity[];
}

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  email?: string;
  whatsapp?: boolean;
  details?: {
    languages?: string;
    experience?: string;
    specialty?: string;
  };
}

export interface ItineraryPackage {
  id: string;
  title: string;
  subtitle: string;
  userName: string;
  duration: string;
  stats: PackageStats;
  travelers: TravelerInfo;
  days: Day[];
  contacts: {
    emergency: ContactInfo;
    guide: ContactInfo;
    manager: ContactInfo;
  };
}

export interface FeedbackFormData {
  packageId: string;
  userName: string;
  feedback: string;
  rating?: number;
}

export interface IssueFormData {
  packageId: string;
  userName: string;
  issue: string;
  urgency: 'low' | 'medium' | 'high';
}

export interface ActivityFeedback {
  activityId: string;
  type: 'like' | 'dislike' | 'neutral';
  comment: string;
}
