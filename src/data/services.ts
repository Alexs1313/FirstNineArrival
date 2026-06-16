export type ServiceTag =
  | 'Dining'
  | 'Premium'
  | 'Guest Care'
  | 'Guest Support'
  | 'Experience'
  | 'Special'
  | 'Arrival'
  | 'Access'
  | 'Comfort'
  | 'Event Care'
  | 'Direction'
  | 'Transport';

export type VenueService = {
  id: string;
  icon: string;
  title: string;
  tag: ServiceTag;
  description: string;
  buttonLabel: string;
};

export type TaxiQuickOption = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

export const SERVICE_TAG_STYLES: Record<
  ServiceTag,
  {background: string; color: string}
> = {
  Dining: {background: '#221808', color: '#e8c864'},
  Premium: {background: '#281e0c', color: '#d0a040'},
  'Guest Care': {background: '#142418', color: '#60c070'},
  'Guest Support': {background: '#1a2030', color: '#7090c0'},
  Experience: {background: '#281a3a', color: '#a060e0'},
  Special: {background: '#2a1030', color: '#c080e0'},
  Arrival: {background: '#1a2840', color: '#6090e0'},
  Access: {background: '#2a1810', color: '#e8a060'},
  Comfort: {background: '#1e1428', color: '#c090e0'},
  'Event Care': {background: '#142028', color: '#60a0c0'},
  Direction: {background: '#101828', color: '#60a0e0'},
  Transport: {background: '#1a2038', color: '#7080e0'},
};

export const VENUE_SERVICES: VenueService[] = [
  {
    id: 'table-reservation',
    icon: '🍽️',
    title: 'Table Reservation',
    tag: 'Dining',
    description:
      'Reserve a table for the opening evening, dinner moment, lounge visit, or a relaxed guest gathering.',
    buttonLabel: 'Book Table',
  },
  {
    id: 'vip-lounge-request',
    icon: '👑',
    title: 'VIP Lounge Request',
    tag: 'Premium',
    description:
      'Request access or assistance for a more private, calm, and comfortable lounge experience during the opening night.',
    buttonLabel: 'Request Lounge',
  },
  {
    id: 'personal-host-assistance',
    icon: '🧑‍💼',
    title: 'Personal Host Assistance',
    tag: 'Guest Care',
    description:
      'Request a personal host for directions, timing, reservations, event guidance, and smooth arrival support.',
    buttonLabel: 'Request Host',
  },
  {
    id: 'wardrobe-assistance',
    icon: '🧥',
    title: 'Wardrobe Assistance',
    tag: 'Guest Support',
    description:
      'Request coat check support, wardrobe help, or arrival assistance for a more comfortable evening.',
    buttonLabel: 'Request Support',
  },
  {
    id: 'photo-moment-booking',
    icon: '📸',
    title: 'Photo Moment Booking',
    tag: 'Experience',
    description:
      'Reserve a short photo moment near a branded opening-night area, elegant backdrop, or premium venue detail.',
    buttonLabel: 'Book Photo Time',
  },
  {
    id: 'celebration-setup',
    icon: '🎂',
    title: 'Celebration Setup',
    tag: 'Special',
    description:
      'Plan a birthday, anniversary, welcome surprise, or small private celebration setup during the evening.',
    buttonLabel: 'Plan Setup',
  },
  {
    id: 'welcome-drink-service',
    icon: '🥂',
    title: 'Welcome Drink Service',
    tag: 'Arrival',
    description:
      'Request a prepared welcome drink moment for your table, lounge area, or guest group after arrival.',
    buttonLabel: 'Request Welcome',
  },
  {
    id: 'priority-arrival-support',
    icon: '🌟',
    title: 'Priority Arrival Support',
    tag: 'Access',
    description:
      'Request help with pass confirmation, guest entry, event orientation, and first-time venue guidance.',
    buttonLabel: 'Request Arrival Help',
  },
  {
    id: 'lounge-seating-request',
    icon: '🛋️',
    title: 'Lounge Seating Request',
    tag: 'Comfort',
    description:
      'Ask for a preferred lounge seating area based on your visit style, group size, and evening plans.',
    buttonLabel: 'Request Seating',
  },
  {
    id: 'dessert-moment-setup',
    icon: '🍰',
    title: 'Dessert Moment Setup',
    tag: 'Dining',
    description:
      'Prepare a refined dessert moment with selected sweets, table notes, and opening-night presentation.',
    buttonLabel: 'Plan Dessert',
  },
  {
    id: 'event-reminder-support',
    icon: '🎶',
    title: 'Event Reminder Support',
    tag: 'Event Care',
    description:
      'Get help choosing which opening moments to save, follow, or receive reminders for during the night.',
    buttonLabel: 'Request Guidance',
  },
  {
    id: 'arrival-parking-guidance',
    icon: '🅿️',
    title: 'Arrival Parking Guidance',
    tag: 'Direction',
    description:
      'Get guidance for nearby parking, entrance direction, drop-off points, and guest arrival flow.',
    buttonLabel: 'Get Parking Help',
  },
];

export const TAXI_QUICK_OPTIONS: TaxiQuickOption[] = [
  {
    id: 'after-opening',
    icon: '🌙',
    title: 'After Opening Pickup',
    subtitle: 'After 11 PM',
  },
  {
    id: 'hotel-pickup',
    icon: '🏨',
    title: 'Hotel Pickup',
    subtitle: 'Venue hotels',
  },
  {
    id: 'nearby-dropoff',
    icon: '🏙️',
    title: 'Nearby Drop-Off',
    subtitle: 'City route',
  },
  {
    id: 'late-night',
    icon: '⭐',
    title: 'Late Night Priority',
    subtitle: 'Any time',
  },
];

export const VEHICLE_OPTIONS = [
  'Standard',
  'Premium',
  'Van',
  'Accessibility Support',
] as const;

export type VehicleOption = (typeof VEHICLE_OPTIONS)[number];

export function getVenueServiceById(serviceId: string): VenueService | undefined {
  return VENUE_SERVICES.find(service => service.id === serviceId);
}
