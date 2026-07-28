export interface Category {
  id: string;
  name: string;
  count: number;
  icon?: string;
  iconName?: string;
  description?: string;
  image?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string[];
  stay?: string;
  activities?: string[];
  image?: string;
  mapLink?: string;
}

export interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  availableSeats: number;
  status: 'Available' | 'Filling Fast' | 'Sold Out';
  festivalOffer?: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hotel' | 'vehicle' | 'activity' | 'transfer' | 'insurance';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  destination: string;
  category: string;
  badge?: 'Bestseller' | 'Trending' | 'Upcoming Batch' | 'Limited Seats' | 'Super Saver' | 'Adventure Special' | 'Weekend Getaway' | 'Heritage Special' | 'Tropical Getaway' | 'International Special';
  durationDays: number;
  durationNights: number;
  originalPrice: number;
  discountedPrice: number;
  pickupLocation: string;
  dropLocation: string;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  batchDates: BatchDate[];
  addOns?: AddOnOption[];
  videoUrl?: string;
  mapEmbedUrl?: string;
  faqs?: FAQItem[];
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tripName: string;
  comment: string;
  verified?: boolean;
}

export interface FilterState {
  searchQuery: string;
  destination: string;
  category: string;
  month: string;
  duration: string;
  maxBudget: number;
}
