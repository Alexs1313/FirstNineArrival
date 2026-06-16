import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type {AppPhase, GuestOverlay, GuestTab} from './types';

type NavigationContextValue = {
  phase: AppPhase;
  activeTab: GuestTab;
  overlay: GuestOverlay;
  finishLoader: () => void;
  finishOnboarding: () => void;
  selectTab: (tab: GuestTab) => void;
  goBack: () => void;
  openFullScreenPass: () => void;
  openEntryRules: () => void;
  openGuestHelp: () => void;
  openEventDetail: (eventId: string) => void;
  openSavedEvents: () => void;
  openReminderAdded: (eventId: string) => void;
  backToEvent: (eventId: string) => void;
  openMenuItem: (itemId: string) => void;
  openYourOrder: () => void;
  openAddedToOrder: (itemId: string, quantity: number) => void;
  openOrderSent: () => void;
  openMyMenuOrders: () => void;
  openServiceBooking: (serviceId: string, editRequestId?: string) => void;
  openServiceRequestSent: () => void;
  openMyRequests: () => void;
  openRequestDetail: (requestId: string) => void;
  openOfferDetail: (offerId: string) => void;
  openOfferRequestSent: () => void;
  openSavedOffers: () => void;
  closeOverlay: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({children}: {children: React.ReactNode}) {
  const [phase, setPhase] = useState<AppPhase>('Loader');
  const [activeTab, setActiveTab] = useState<GuestTab>('PassTab');
  const [overlay, setOverlay] = useState<GuestOverlay>({type: 'none'});

  const finishLoader = useCallback(() => {
    setPhase('Onboarding');
  }, []);

  const finishOnboarding = useCallback(() => {
    setPhase('Main');
  }, []);

  const selectTab = useCallback((tab: GuestTab) => {
    setActiveTab(tab);
    setOverlay({type: 'none'});
  }, []);

  const goBack = useCallback(() => {
    setOverlay(current => {
      if (current.type === 'ReminderAdded') {
        return {type: 'EventDetail', eventId: current.eventId};
      }
      if (current.type === 'AddedToOrder') {
        return {type: 'MenuItemDetail', itemId: current.itemId};
      }
      if (current.type === 'OrderSent') {
        return {type: 'YourOrder'};
      }
      if (current.type === 'MyMenuOrders') {
        return {type: 'YourOrder'};
      }
      if (current.type === 'ServiceBooking') {
        return current.editRequestId
          ? {type: 'RequestDetail', requestId: current.editRequestId}
          : {type: 'none'};
      }
      if (current.type === 'ServiceRequestSent') {
        return {type: 'none'};
      }
      if (current.type === 'RequestDetail') {
        return {type: 'MyRequests'};
      }
      if (current.type === 'MyRequests') {
        return {type: 'none'};
      }
      if (current.type === 'OfferDetail') {
        return {type: 'none'};
      }
      if (current.type === 'OfferRequestSent') {
        return {type: 'none'};
      }
      if (current.type === 'SavedOffers') {
        return {type: 'none'};
      }
      return {type: 'none'};
    });
  }, []);

  const openFullScreenPass = useCallback(() => {
    setOverlay({type: 'FullScreenPass'});
  }, []);

  const openEntryRules = useCallback(() => {
    setOverlay({type: 'EntryRules'});
  }, []);

  const openGuestHelp = useCallback(() => {
    setOverlay({type: 'GuestHelp'});
  }, []);

  const openEventDetail = useCallback((eventId: string) => {
    setOverlay({type: 'EventDetail', eventId});
  }, []);

  const openSavedEvents = useCallback(() => {
    setOverlay({type: 'SavedEvents'});
  }, []);

  const openReminderAdded = useCallback((eventId: string) => {
    setOverlay({type: 'ReminderAdded', eventId});
  }, []);

  const backToEvent = useCallback((eventId: string) => {
    setOverlay({type: 'EventDetail', eventId});
  }, []);

  const openMenuItem = useCallback((itemId: string) => {
    setOverlay({type: 'MenuItemDetail', itemId});
  }, []);

  const openYourOrder = useCallback(() => {
    setOverlay({type: 'YourOrder'});
  }, []);

  const openAddedToOrder = useCallback((itemId: string, quantity: number) => {
    setOverlay({type: 'AddedToOrder', itemId, quantity});
  }, []);

  const openOrderSent = useCallback(() => {
    setOverlay({type: 'OrderSent'});
  }, []);

  const openMyMenuOrders = useCallback(() => {
    setOverlay({type: 'MyMenuOrders'});
  }, []);

  const openServiceBooking = useCallback(
    (serviceId: string, editRequestId?: string) => {
      setOverlay({type: 'ServiceBooking', serviceId, editRequestId});
    },
    [],
  );

  const openServiceRequestSent = useCallback(() => {
    setOverlay({type: 'ServiceRequestSent'});
  }, []);

  const openMyRequests = useCallback(() => {
    setOverlay({type: 'MyRequests'});
  }, []);

  const openRequestDetail = useCallback((requestId: string) => {
    setOverlay({type: 'RequestDetail', requestId});
  }, []);

  const openOfferDetail = useCallback((offerId: string) => {
    setOverlay({type: 'OfferDetail', offerId});
  }, []);

  const openOfferRequestSent = useCallback(() => {
    setOverlay({type: 'OfferRequestSent'});
  }, []);

  const openSavedOffers = useCallback(() => {
    setOverlay({type: 'SavedOffers'});
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlay({type: 'none'});
  }, []);

  const value = useMemo(
    () => ({
      phase,
      activeTab,
      overlay,
      finishLoader,
      finishOnboarding,
      selectTab,
      goBack,
      openFullScreenPass,
      openEntryRules,
      openGuestHelp,
      openEventDetail,
      openSavedEvents,
      openReminderAdded,
      backToEvent,
      openMenuItem,
      openYourOrder,
      openAddedToOrder,
      openOrderSent,
      openMyMenuOrders,
      openServiceBooking,
      openServiceRequestSent,
      openMyRequests,
      openRequestDetail,
      openOfferDetail,
      openOfferRequestSent,
      openSavedOffers,
      closeOverlay,
    }),
    [
      phase,
      activeTab,
      overlay,
      finishLoader,
      finishOnboarding,
      selectTab,
      goBack,
      openFullScreenPass,
      openEntryRules,
      openGuestHelp,
      openEventDetail,
      openSavedEvents,
      openReminderAdded,
      backToEvent,
      openMenuItem,
      openYourOrder,
      openAddedToOrder,
      openOrderSent,
      openMyMenuOrders,
      openServiceBooking,
      openServiceRequestSent,
      openMyRequests,
      openRequestDetail,
      openOfferDetail,
      openOfferRequestSent,
      openSavedOffers,
      closeOverlay,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useAppNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useAppNavigation must be used within NavigationProvider');
  }
  return context;
}
