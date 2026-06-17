import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {EventListCard} from '../components/events/EventCards';
import {SavedEventsHeader} from '../components/events/EventScreenHeader';
import {OPENING_EVENTS} from '../data/events';
import {useEvents} from '../context/EventsContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

export function SavedEventsScreen() {
  const insets = useSafeAreaInsets();
  const {openEventDetail} = useAppNavigation();

  const {savedEventIds, savedCount} = useEvents();
  const savedEvents = OPENING_EVENTS.filter(event =>
    savedEventIds.includes(event.id),
  );

  return (
    <View style={styles.SavedEventsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.SavedEventsScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.SavedEventsScreenHeaderWrap}>
          <SavedEventsHeader count={savedCount} />
        </View>

        {savedCount === 0 ? (
          <View style={styles.SavedEventsScreenEmptyEnclave}>
            <Text style={styles.SavedEventsScreenEmptyIconSigil}>🔖</Text>
            <Text style={styles.SavedEventsScreenEmptyTitleFiligree}>
              No saved events yet
            </Text>
            <Text style={styles.SavedEventsScreenEmptyBodyFiligree}>
              Tap "Save Event" on any event to add it here.
            </Text>
          </View>
        ) : (
          <View style={styles.SavedEventsScreenListLintel}>
            {savedEvents.map(event => (
              <EventListCard
                key={event.id}
                event={event}
                onPress={() => openEventDetail(event.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SavedEventsScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  SavedEventsScreenScrollContent: {
    paddingHorizontal: 20,
  },
  SavedEventsScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -20,
  },
  SavedEventsScreenEmptyEnclave: {
    alignItems: 'center',
    paddingTop: 60,
  },
  SavedEventsScreenEmptyIconSigil: {
    fontSize: 40,
    marginBottom: 16,
    opacity: 0.45,
  },

  SavedEventsScreenEmptyTitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 16,
    letterSpacing: -0.31,
    marginBottom: 6,
    textAlign: 'center',
  },
  SavedEventsScreenEmptyBodyFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    textAlign: 'center',
  },
  SavedEventsScreenListLintel: {
    gap: 10,
    paddingTop: 16,
  },
});
