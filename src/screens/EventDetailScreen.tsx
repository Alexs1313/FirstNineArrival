import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  EventHeroCard,
  EventSectionCard,
  EventSplitCard,
} from '../components/events/EventCards';
import {EventScreenHeader} from '../components/events/EventScreenHeader';
import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {getEventById} from '../data/events';
import {useEvents} from '../context/EventsContext';
import {useAppNavigation} from '../navigation/NavigationContext';

type EventDetailScreenProps = {
  eventId: string;
};

export function EventDetailScreen({eventId}: EventDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const {openReminderAdded, openSavedEvents} = useAppNavigation();
  const {isEventSaved, hasReminder, toggleSaved, addReminder} = useEvents();
  const event = getEventById(eventId);

  if (!event) {
    return null;
  }

  const saved = isEventSaved(eventId);
  const reminded = hasReminder(eventId);

  const handleReminderPress = () => {
    if (reminded) {
      return;
    }
    addReminder(eventId);
    openReminderAdded(eventId);
  };

  return (
    <View style={styles.EventDetailScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.EventDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.EventDetailScreenHeaderWrap}>
          <EventScreenHeader
            showSaved
            savedActive={saved}
            onSavedPress={openSavedEvents}
          />
        </View>

        <EventHeroCard event={event} />

        <EventSectionCard title="About This Event" body={event.description} />

        <EventSectionCard title="What to Expect" body={event.whatToExpect} />

        <View style={styles.EventDetailScreenSplitLintel}>
          <EventSplitCard title="Best For" body={event.bestFor} />
          <EventSplitCard title="Dress Mood" body={event.dressMood} />
        </View>

        <View style={styles.EventDetailScreenActionsLintel}>
          <OutlineButton
            label={reminded ? 'Reminder Added' : 'Add Reminder'}
            onPress={handleReminderPress}
            icon={reminded ? '🔕' : '🔔'}
            fullWidth
            compact
            tone="surface"
            active={reminded}
          />
          <PrimaryButton
            label={saved ? 'Remove from Saved' : 'Save Event'}
            onPress={() => toggleSaved(eventId)}
            fullWidth
            compact
            icon="🔖"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventDetailScreenFacetChassis: {
    backgroundColor: '#0c0b1a',
    flex: 1,
  },
  EventDetailScreenScrollContent: {
    gap: 10,
    paddingHorizontal: 20,
  },
  EventDetailScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -20,
  },

  EventDetailScreenSplitLintel: {
    flexDirection: 'row',
    gap: 10,
  },

  EventDetailScreenActionsLintel: {
    gap: 10,
    marginTop: 6,
  },
});
