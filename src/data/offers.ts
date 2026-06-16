export type OfferTag =
  | 'Dining'
  | 'Lounge'
  | 'VIP'
  | 'Weekend'
  | 'Transport'
  | 'Experience'
  | 'Sweet Moment'
  | 'Return Guest';

export type OfferItem = {
  id: string;
  icon: string;
  title: string;
  tag: OfferTag;
  validity: string;
  description: string;
  included: string;
  howToRequest: string;
  terms: string;
};

export const OFFER_TAG_STYLES: Record<
  OfferTag,
  {background: string; color: string}
> = {
  Dining: {background: '#221808', color: '#e8c864'},
  Lounge: {background: '#141430', color: '#7080e0'},
  VIP: {background: '#281e0c', color: '#d0a040'},
  Weekend: {background: '#142818', color: '#70c080'},
  Transport: {background: '#1a2038', color: '#7080e0'},
  Experience: {background: '#281a3a', color: '#a060e0'},
  'Sweet Moment': {background: '#2a1018', color: '#e08090'},
  'Return Guest': {background: '#1a2840', color: '#6090e0'},
};

export const AFTER_OPENING_OFFERS: OfferItem[] = [
  {
    id: 'return-guest-dinner',
    icon: '🎁',
    title: 'Return Guest Dinner',
    tag: 'Dining',
    validity: 'After Opening Week',
    description:
      'A refined dinner offer for guests returning after the opening event.',
    included:
      'Three-course dinner for two, welcome cocktail, priority seating, seasonal menu selection.',
    howToRequest:
      'Open this offer, tap "Request This Offer", and a guest service team member will contact you to confirm the booking.',
    terms:
      'Valid for 30 days after opening. One use per guest. Subject to availability.',
  },
  {
    id: 'golden-lounge-invitation',
    icon: '🥂',
    title: 'Golden Lounge Invitation',
    tag: 'Lounge',
    validity: 'Next Weekend',
    description:
      'A stylish return invitation for guests who want to enjoy a calmer lounge evening after the opening night.',
    included:
      'Reserved lounge seating, welcome drink, light bites, relaxed music atmosphere, and guest priority entry.',
    howToRequest:
      'Save this offer and send a lounge request from the offer detail screen.',
    terms:
      'Valid during selected lounge evenings only. Seating depends on availability.',
  },
  {
    id: 'signature-menu-encore',
    icon: '🍽️',
    title: 'Signature Menu Encore',
    tag: 'Dining',
    validity: 'Opening Month',
    description:
      'A special after-opening menu experience featuring selected dishes inspired by the first night.',
    included:
      'Chef-selected tasting items, dessert pairing, priority table request, and menu guidance from guest support.',
    howToRequest:
      'Tap "Request This Offer" and choose your preferred visit date and dining time.',
    terms:
      'Valid for one booking during the opening month. Menu items may change seasonally.',
  },
  {
    id: 'vip-table-priority',
    icon: '👑',
    title: 'VIP Table Priority',
    tag: 'VIP',
    validity: 'Limited Access',
    description:
      'Priority request access for guests who want a more private table or premium lounge seating after the launch.',
    included:
      'Priority table request, preferred seating note, guest host assistance, and VIP lounge availability check.',
    howToRequest:
      'Open the offer and submit your preferred date, time, and number of guests.',
    terms:
      'This offer does not guarantee VIP access until confirmed by the venue team.',
  },
  {
    id: 'weekend-night-return',
    icon: '🎶',
    title: 'Weekend Night Return',
    tag: 'Weekend',
    validity: 'Friday to Sunday',
    description:
      'A return offer created for guests planning a stylish weekend evening after the opening event.',
    included:
      'Weekend event suggestion, lounge seating request, drinks recommendation, and saved event reminder.',
    howToRequest:
      'Save the offer, choose a weekend date, and send your request for confirmation.',
    terms:
      'Valid on selected weekends only. Offer details may depend on the event schedule.',
  },
  {
    id: 'after-event-ride-benefit',
    icon: '🚕',
    title: 'After Event Ride Benefit',
    tag: 'Transport',
    validity: '14 Days',
    description:
      'A practical return-visit transport benefit for guests who want smoother arrival or departure planning.',
    included:
      'Taxi request priority, pickup time planning, hotel transfer option, and guest support confirmation.',
    howToRequest:
      'Open the Services tab, select Taxi Booking, and mention this offer in the notes field.',
    terms:
      'Transport is subject to itinerary, timing, and driver availability. Additional costs may apply.',
  },
  {
    id: 'opening-night-photo-moment',
    icon: '📸',
    title: 'Opening Night Photo Moment',
    tag: 'Experience',
    validity: 'Opening Month',
    description:
      'A branded photo moment for guests who want a polished memory from their return visit.',
    included:
      'Reserved photo-zone time, venue backdrop access, guest timing support, and optional celebration note.',
    howToRequest:
      'Tap "Request This Offer" and select your preferred photo moment time.',
    terms:
      'Photo zone availability may vary by evening and event setup.',
  },
  {
    id: 'midnight-lounge-access',
    icon: '🌙',
    title: 'Midnight Lounge Access',
    tag: 'Lounge',
    validity: 'Late Evenings',
    description:
      'A late-evening lounge offer for guests who enjoy a calmer premium atmosphere after the main crowd.',
    included:
      'Late lounge seating request, soft music atmosphere, drinks recommendation, and guest care support.',
    howToRequest:
      'Open the offer detail screen and send a lounge access request.',
    terms:
      'Valid during selected late-evening lounge hours. Guest access must be confirmed.',
  },
  {
    id: 'dessert-sparkle-return',
    icon: '🍰',
    title: 'Dessert & Sparkle Return',
    tag: 'Sweet Moment',
    validity: '30 Days',
    description:
      'A light return offer focused on dessert, sparkling drinks, and a relaxed evening visit.',
    included:
      'Dessert plate for two, sparkling drink pairing, reserved table note, and calm seating request.',
    howToRequest:
      'Save this offer and request it from the Offers screen before your visit.',
    terms:
      'One request per guest. Dessert selection may change depending on daily availability.',
  },
  {
    id: 'first-arrival-loyalty-preview',
    icon: '🌟',
    title: 'First Arrival Loyalty Preview',
    tag: 'Return Guest',
    validity: '30 Days',
    description:
      'A preview offer for opening guests who want to stay connected with future venue moments.',
    included:
      'Upcoming event previews, saved offer list, priority reminder setup, and return-visit suggestions.',
    howToRequest:
      'Tap "Save Offer" and check the Offers tab for available return invitations.',
    terms:
      'This is an informational guest offer. Future invitations may depend on venue schedule and availability.',
  },
];

export function getOfferById(offerId: string): OfferItem | undefined {
  return AFTER_OPENING_OFFERS.find(offer => offer.id === offerId);
}
