export type AppPhase = 'Loader' | 'Onboarding' | 'Main';

export type GuestTab =
  | 'PassTab'
  | 'EventsTab'
  | 'MenuTab'
  | 'ServicesTab'
  | 'OffersTab';

export type GuestOverlay =
  | {type: 'none'}
  | {type: 'FullScreenPass'}
  | {type: 'EntryRules'}
  | {type: 'GuestHelp'}
  | {type: 'EventDetail'; eventId: string}
  | {type: 'SavedEvents'}
  | {type: 'ReminderAdded'; eventId: string}
  | {type: 'MenuItemDetail'; itemId: string}
  | {type: 'YourOrder'}
  | {type: 'AddedToOrder'; itemId: string; quantity: number}
  | {type: 'OrderSent'}
  | {type: 'MyMenuOrders'}
  | {type: 'ServiceBooking'; serviceId: string; editRequestId?: string}
  | {type: 'ServiceRequestSent'}
  | {type: 'MyRequests'}
  | {type: 'RequestDetail'; requestId: string}
  | {type: 'OfferDetail'; offerId: string}
  | {type: 'OfferRequestSent'}
  | {type: 'SavedOffers'};
