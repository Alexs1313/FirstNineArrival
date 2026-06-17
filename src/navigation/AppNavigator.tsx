import React from 'react';

import {AppProvider} from '../context/AppContext';
import {EventsProvider} from '../context/EventsContext';
import {MenuProvider} from '../context/MenuContext';
import {OffersProvider} from '../context/OffersContext';
import {ServicesProvider} from '../context/ServicesContext';
import {AppShell} from './AppShell';

import {NavigationProvider} from './NavigationContext';

export function AppNavigator() {
  return (
    <AppProvider>
      <EventsProvider>
        <MenuProvider>
          <ServicesProvider>
            <OffersProvider>
              <NavigationProvider>
                <AppShell />
              </NavigationProvider>
            </OffersProvider>
          </ServicesProvider>
        </MenuProvider>
      </EventsProvider>
    </AppProvider>
  );
}
