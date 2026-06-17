import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {EventListCard} from '../components/events/EventCards';
import {SavedChipButton} from '../components/events/SavedChipButton';
import {OPENING_EVENTS} from '../data/events';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function EventsScreen() {
  const insets = useSafeAreaInsets();
  const {openEventDetail, openSavedEvents} = useAppNavigation();

  return (
    <View style={styles.EventsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.EventsScreenScrollContent,
          {paddingBottom: layout.screenPadding},
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#131228', colors.surface]}
          style={styles.EventsScreenHeaderGradient}>
          <View
            style={[
              styles.EventsScreenHeaderInset,
              {paddingTop: insets.top + 16},
            ]}>
            <View style={styles.EventsScreenHeaderRowLintel}>
              <View style={styles.EventsScreenHeaderTextEnclave}>
                <Text style={styles.EventsScreenEyebrowFiligree}>
                  OPENING NIGHT 2026
                </Text>
                <Text style={styles.EventsScreenTitleFiligree}>
                  Opening Events
                </Text>
                <Text style={styles.EventsScreenSubtitleFiligree}>
                  Explore the full opening night plan.
                </Text>
              </View>
              <SavedChipButton onPress={openSavedEvents} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.EventsScreenListLintel}>
          {OPENING_EVENTS.map(event => (
            <EventListCard
              key={event.id}
              event={event}
              onPress={() => openEventDetail(event.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventsScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  EventsScreenScrollContent: {
    gap: 0,
  },

  EventsScreenHeaderGradient: {},
  EventsScreenHeaderInset: {
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  EventsScreenHeaderRowLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  EventsScreenHeaderTextEnclave: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },

  EventsScreenEyebrowFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1.12,
    textTransform: 'uppercase',
  },
  EventsScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.07,
    lineHeight: 29,
  },
  EventsScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 19.5,
    marginTop: 3,
  },

  EventsScreenListLintel: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
    paddingTop: 4,
  },
});
