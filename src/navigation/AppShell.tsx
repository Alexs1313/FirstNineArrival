import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ScreenBackground} from '../components/layout/ScreenBackground';
import {TabBar} from '../components/nav/TabBar';
import {AddedToOrderScreen} from '../screens/AddedToOrderScreen';
import {EntryRulesScreen} from '../screens/EntryRulesScreen';
import {EventDetailScreen} from '../screens/EventDetailScreen';
import {EventsScreen} from '../screens/EventsScreen';
import {FullScreenPassScreen} from '../screens/FullScreenPassScreen';
import {GuestHelpScreen} from '../screens/GuestHelpScreen';
import {LoaderScreen} from '../screens/LoaderScreen';
import {MenuItemDetailScreen} from '../screens/MenuItemDetailScreen';
import {MyMenuOrdersScreen} from '../screens/MyMenuOrdersScreen';
import {OrderSentScreen} from '../screens/OrderSentScreen';
import {YourOrderScreen} from '../screens/YourOrderScreen';
import {MenuScreen} from '../screens/MenuScreen';
import {OffersScreen} from '../screens/OffersScreen';
import {OfferDetailScreen} from '../screens/OfferDetailScreen';
import {OfferRequestSentScreen} from '../screens/OfferRequestSentScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {MyRequestsScreen} from '../screens/MyRequestsScreen';
import {RequestDetailScreen} from '../screens/RequestDetailScreen';
import {ServiceBookingScreen} from '../screens/ServiceBookingScreen';
import {ServiceRequestSentScreen} from '../screens/ServiceRequestSentScreen';
import {ReminderAddedScreen} from '../screens/ReminderAddedScreen';
import {SavedEventsScreen} from '../screens/SavedEventsScreen';
import {SavedOffersScreen} from '../screens/SavedOffersScreen';
import {PassScreen} from '../screens/PassScreen';
import {ServicesScreen} from '../screens/ServicesScreen';
import {colors} from '../constants/theme';
import {useAppNavigation} from './NavigationContext';

function TabContent() {
  const {activeTab} = useAppNavigation();

  switch (activeTab) {
    case 'PassTab':
      return <PassScreen />;
    case 'EventsTab':
      return <EventsScreen />;
    case 'MenuTab':
      return <MenuScreen />;
    case 'ServicesTab':
      return <ServicesScreen />;
    case 'OffersTab':
      return <OffersScreen />;
    default:
      return <PassScreen />;
  }
}

function OverlayContent() {
  const {overlay} = useAppNavigation();

  switch (overlay.type) {
    case 'FullScreenPass':
      return <FullScreenPassScreen />;
    case 'EntryRules':
      return <EntryRulesScreen />;
    case 'GuestHelp':
      return <GuestHelpScreen />;
    case 'EventDetail':
      return <EventDetailScreen eventId={overlay.eventId} />;
    case 'SavedEvents':
      return <SavedEventsScreen />;
    case 'ReminderAdded':
      return <ReminderAddedScreen eventId={overlay.eventId} />;
    case 'MenuItemDetail':
      return <MenuItemDetailScreen itemId={overlay.itemId} />;
    case 'YourOrder':
      return <YourOrderScreen />;
    case 'AddedToOrder':
      return (
        <AddedToOrderScreen
          itemId={overlay.itemId}
          quantity={overlay.quantity}
        />
      );
    case 'OrderSent':
      return <OrderSentScreen />;
    case 'MyMenuOrders':
      return <MyMenuOrdersScreen />;
    case 'ServiceBooking':
      return (
        <ServiceBookingScreen
          serviceId={overlay.serviceId}
          editRequestId={overlay.editRequestId}
        />
      );
    case 'ServiceRequestSent':
      return <ServiceRequestSentScreen />;
    case 'MyRequests':
      return <MyRequestsScreen />;
    case 'RequestDetail':
      return <RequestDetailScreen requestId={overlay.requestId} />;
    case 'OfferDetail':
      return <OfferDetailScreen offerId={overlay.offerId} />;
    case 'OfferRequestSent':
      return <OfferRequestSentScreen />;
    case 'SavedOffers':
      return <SavedOffersScreen />;
    default:
      return null;
  }
}

function MainShell() {
  const {overlay, activeTab, selectTab} = useAppNavigation();
  const showTabBar = overlay.type === 'none';

  return (
    <View style={styles.AppShellFacetChassis}>
      <ScreenBackground>
        <View style={styles.AppShellContent}>
          <TabContent />
        </View>
      </ScreenBackground>
      {overlay.type !== 'none' && (
        <View style={styles.AppShellOverlay}>
          <OverlayContent />
        </View>
      )}
      {showTabBar && <TabBar activeTab={activeTab} onSelectTab={selectTab} />}
    </View>
  );
}

export function AppShell() {
  const {phase, finishLoader, finishOnboarding} = useAppNavigation();

  if (phase === 'Loader') {
    return <LoaderScreen onComplete={finishLoader} />;
  }

  if (phase === 'Onboarding') {
    return <OnboardingScreen onComplete={finishOnboarding} />;
  }

  return <MainShell />;
}

const styles = StyleSheet.create({
  AppShellFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  AppShellContent: {
    flex: 1,
  },
  AppShellOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.surface,
  },
});
