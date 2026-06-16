export type EntryRule = {
  id: string;
  emoji: string;
  text: string;
};

export const ENTRY_RULES: EntryRule[] = [
  {
    id: 'valid-pass',
    emoji: '🎫',
    text: 'Valid pass may be requested by guest service staff at any access point.',
  },
  {
    id: 'dress-code',
    emoji: '👔',
    text: 'Smart elegant dress code is recommended for all opening night guests.',
  },
  {
    id: 'arrival-time',
    emoji: '⏰',
    text: 'Guests should arrive before the main opening show at 9:00 PM.',
  },
  {
    id: 'service-requests',
    emoji: '🍽️',
    text: 'Service requests and menu orders are prepared for venue confirmation.',
  },
  {
    id: 'taxi-booking',
    emoji: '🚕',
    text: 'Taxi booking requests require pickup time and destination to be confirmed.',
  },
  {
    id: 'menu-orders',
    emoji: '📋',
    text: 'Menu orders are submitted for venue confirmation before preparation.',
  },
];
