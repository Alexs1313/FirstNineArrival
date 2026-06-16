import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {getEventById} from '../data/events';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

type ReminderAddedScreenProps = {
  eventId: string;
};

export function ReminderAddedScreen({eventId}: ReminderAddedScreenProps) {
  const insets = useSafeAreaInsets();
  const {backToEvent, openSavedEvents} = useAppNavigation();
  const event = getEventById(eventId);

  if (!event) {
    return null;
  }

  return (
    <View style={styles.ReminderAddedScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.ReminderAddedScreenScrollContent,
          {
            paddingTop: insets.top + 32,
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ReminderAddedScreenIconEnclave}>
          <Text style={styles.ReminderAddedScreenIconSigil}>🔔</Text>
        </View>

        <Text style={styles.ReminderAddedScreenTitleFiligree}>
          Reminder Added
        </Text>
        <Text style={styles.ReminderAddedScreenSubtitleFiligree}>
          You will be reminded before this opening event begins.
        </Text>

        <View style={styles.ReminderAddedScreenEventCard}>
          <Text style={styles.ReminderAddedScreenEventTitleFiligree}>
            {event.title}
          </Text>
          <View style={styles.ReminderAddedScreenEventMetaLintel}>
            <View style={styles.ReminderAddedScreenEventMetaCell}>
              <Text style={styles.ReminderAddedScreenEventMetaIconSigil}>
                🕐
              </Text>
              <Text style={styles.ReminderAddedScreenEventTimeFiligree}>
                {event.time}
              </Text>
            </View>
            <View style={styles.ReminderAddedScreenEventMetaCell}>
              <Text style={styles.ReminderAddedScreenEventMetaIconSigil}>
                📍
              </Text>
              <Text style={styles.ReminderAddedScreenEventLocationFiligree}>
                {event.location}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.ReminderAddedScreenActionsLintel}>
          <PrimaryButton
            label="Back to Event"
            onPress={() => backToEvent(eventId)}
            fullWidth
            compact
          />
          <OutlineButton
            label="View Saved Events"
            onPress={openSavedEvents}
            fullWidth
            compact
            tone="gold"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ReminderAddedScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ReminderAddedScreenScrollContent: {
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 24,
    justifyContent: 'center',
    flex: 1,
  },
  ReminderAddedScreenIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(196, 145, 44, 0.09)',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 20,
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  ReminderAddedScreenIconSigil: {
    fontSize: 36,
  },
  ReminderAddedScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.07,
    marginBottom: 10,
    textAlign: 'center',
  },
  ReminderAddedScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
    textAlign: 'center',
  },
  ReminderAddedScreenEventCard: {
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 28,
    padding: 17,
  },

  ReminderAddedScreenEventTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.23,
  },
  ReminderAddedScreenEventMetaLintel: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 6,
  },
  ReminderAddedScreenEventMetaCell: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  ReminderAddedScreenEventMetaIconSigil: {
    fontSize: 13,
  },
  ReminderAddedScreenEventTimeFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  ReminderAddedScreenEventLocationFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },

  ReminderAddedScreenActionsLintel: {
    alignSelf: 'stretch',
    gap: 10,
  },
});
