export type EventTag =
  | 'Welcome'
  | 'Special'
  | 'Music'
  | 'Dining'
  | 'Show'
  | 'Lounge'
  | 'Offers';

export type EventItem = {
  id: string;
  title: string;
  tag: EventTag;
  featured: boolean;
  time: string;
  location: string;
  date: string;
  description: string;
  whatToExpect: string;
  bestFor: string;
  dressMood: string;
};

export const EVENT_TAG_STYLES: Record<
  EventTag,
  {background: string; color: string}
> = {
  Welcome: {background: '#1a2840', color: '#6090e0'},
  Special: {background: '#281a3a', color: '#a060e0'},
  Music: {background: '#142e28', color: '#50c090'},
  Dining: {background: '#281e0c', color: '#d0a040'},
  Show: {background: '#2a1010', color: '#e06060'},
  Lounge: {background: '#141430', color: '#7080e0'},
  Offers: {background: '#142e28', color: '#50c090'},
};

export const OPENING_EVENTS: EventItem[] = [
  {
    id: 'grand-arrival-welcome',
    title: 'Grand Arrival Welcome',
    tag: 'Welcome',
    featured: true,
    time: '6:00 PM',
    location: 'Main Entrance',
    date: 'Opening Night',
    description:
      'A refined welcome moment with guest greetings, pass access support, and the first elegant atmosphere of the opening night.',
    whatToExpect:
      'Elegant welcome gestures, guest pass verification, ambient music, arrival refreshments, and opening-night guidance.',
    bestFor: 'First-time arrivals, couples, photography moments.',
    dressMood: 'Smart elegant to formal.',
  },
  {
    id: 'golden-lobby-reception',
    title: 'Golden Lobby Reception',
    tag: 'Welcome',
    featured: false,
    time: '6:30 PM',
    location: 'Grand Lobby',
    date: 'Opening Night',
    description:
      'A calm reception moment where guests can settle in, explore the venue atmosphere, and prepare for the main evening program.',
    whatToExpect:
      'Welcome drinks, soft background music, guest support staff, premium lobby lighting, and first-look venue details.',
    bestFor: 'Early guests, relaxed arrivals, social introductions.',
    dressMood: 'Elegant evening style.',
  },
  {
    id: 'opening-toast-moment',
    title: 'Opening Toast Moment',
    tag: 'Special',
    featured: true,
    time: '6:45 PM',
    location: 'Main Lounge',
    date: 'Opening Night',
    description:
      'A signature opening toast created to mark the beginning of the first official evening at the venue.',
    whatToExpect:
      'Host greeting, ceremonial toast, elegant glass service, short welcome speech, and premium lounge mood.',
    bestFor: 'Opening guests, couples, small groups.',
    dressMood: 'Formal evening.',
  },
  {
    id: 'live-lounge-performance',
    title: 'Live Lounge Performance',
    tag: 'Music',
    featured: true,
    time: '7:30 PM',
    location: 'Lounge Stage',
    date: 'Opening Night',
    description:
      'A warm live music performance designed to create a smooth, stylish, and memorable opening-night atmosphere.',
    whatToExpect:
      'Live vocals or instrumental music, soft lighting, lounge seating, relaxed conversation, and elegant stage visuals.',
    bestFor: 'Music lovers, lounge guests, relaxed evening visitors.',
    dressMood: 'Smart casual to elegant.',
  },
  {
    id: 'signature-menu-preview',
    title: 'Signature Menu Preview',
    tag: 'Dining',
    featured: false,
    time: '8:15 PM',
    location: 'Dining Room',
    date: 'Opening Night',
    description:
      'A curated preview of selected food and drink items prepared for guests who want to explore the venue’s opening menu.',
    whatToExpect:
      'Small tasting plates, signature bites, dessert samples, drink pairings, and refined dining presentation.',
    bestFor: 'Food lovers, couples, groups, first-time dining guests.',
    dressMood: 'Modern elegant.',
  },
  {
    id: 'main-show-highlight',
    title: 'Main Show Highlight',
    tag: 'Show',
    featured: true,
    time: '9:00 PM',
    location: 'Central Hall',
    date: 'Opening Night',
    description:
      'The central opening-night show moment with music, light effects, and a polished launch presentation.',
    whatToExpect:
      'Show lighting, stage atmosphere, music build-up, host announcement, and a premium visual moment for guests.',
    bestFor: 'All opening guests, photo moments, main evening experience.',
    dressMood: 'Elegant to formal.',
  },
  {
    id: 'vip-lounge-introduction',
    title: 'VIP Lounge Introduction',
    tag: 'Lounge',
    featured: false,
    time: '9:45 PM',
    location: 'VIP Lounge',
    date: 'Opening Night',
    description:
      'A private-style lounge introduction for guests interested in premium seating, quieter service, and a more exclusive atmosphere.',
    whatToExpect:
      'Lounge overview, seating guidance, premium service options, calm music, and guest care support.',
    bestFor: 'VIP guests, couples, business visitors, quiet evening guests.',
    dressMood: 'Formal and polished.',
  },
  {
    id: 'dj-lounge-afterparty',
    title: 'DJ Lounge Afterparty',
    tag: 'Music',
    featured: true,
    time: '10:30 PM',
    location: 'Cocktail Lounge',
    date: 'Opening Night',
    description:
      'A stylish late-evening lounge session with DJ music, drinks, and relaxed social energy after the main opening program.',
    whatToExpect:
      'DJ set, cocktail lounge mood, evening lights, social atmosphere, and comfortable seating areas.',
    bestFor: 'Groups, nightlife guests, music lovers, afterparty visitors.',
    dressMood: 'Stylish evening.',
  },
  {
    id: 'midnight-guest-moment',
    title: 'Midnight Guest Moment',
    tag: 'Special',
    featured: false,
    time: '12:00 AM',
    location: 'Main Lounge',
    date: 'Opening Night',
    description:
      'A final signature moment for opening guests before the evening moves into late-night lounge energy.',
    whatToExpect:
      'Short host moment, soft lighting, final toast mood, guest appreciation, and after-opening offer preview.',
    bestFor: 'Late-night guests, loyal visitors, couples, lounge guests.',
    dressMood: 'Elegant night style.',
  },
  {
    id: 'after-opening-preview',
    title: 'After Opening Preview',
    tag: 'Offers',
    featured: false,
    time: '12:30 AM',
    location: 'Guest Care Lounge',
    date: 'Opening Night',
    description:
      'A guest-focused preview of return offers, future lounge evenings, dining moments, and selected after-opening invitations.',
    whatToExpect:
      'Offer information, return visit suggestions, saved offer guidance, guest support, and upcoming event previews.',
    bestFor: 'Returning guests, planners, VIP visitors, offer seekers.',
    dressMood: 'Smart casual to elegant.',
  },
];

export function getEventById(eventId: string): EventItem | undefined {
  return OPENING_EVENTS.find(event => event.id === eventId);
}
