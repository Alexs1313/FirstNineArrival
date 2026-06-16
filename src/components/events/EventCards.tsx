import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {EventItem} from '../../data/events';
import {colors, fonts, layout} from '../../constants/theme';
import {EventTagBadge} from './EventTagBadge';

type EventListCardProps = {
  event: EventItem;
  onPress: () => void;
};

export function EventListCard({event, onPress}: EventListCardProps) {
  return (
    <View style={styles.EventListCardFacetChassis}>
      <View style={styles.EventListCardTopLintel}>
        <EventTagBadge tag={event.tag} />
        <View style={styles.EventListCardTimeEnclave}>
          <Text style={styles.EventListCardTimeIconSigil}>🕐</Text>
          <Text style={styles.EventListCardTimeFiligree}>{event.time}</Text>
        </View>
      </View>

      <Text style={styles.EventListCardTitleFiligree}>{event.title}</Text>

      <View style={styles.EventListCardLocationLintel}>
        <Text style={styles.EventListCardLocationIconSigil}>📍</Text>
        <Text style={styles.EventListCardLocationFiligree}>{event.location}</Text>
      </View>

      <Text style={styles.EventListCardDescriptionFiligree}>
        {event.description}
      </Text>

      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.EventListCardActionPortico,
          pressed && styles.EventListCardActionPressedDim,
        ]}>
        <Text style={styles.EventListCardActionFiligree}>View Event</Text>
        <Text style={styles.EventListCardActionArrowSigil}>→</Text>
      </Pressable>
    </View>
  );
}

type EventHeroCardProps = {
  event: EventItem;
};

export function EventHeroCard({event}: EventHeroCardProps) {
  return (
    <LinearGradient
      colors={['#131228', '#1a1935']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.EventHeroCardFacetChassis}>
      <View style={styles.EventHeroCardInset}>
        <EventTagBadge tag={event.tag} />
        <Text style={styles.EventHeroCardTitleFiligree}>{event.title}</Text>

        <View style={styles.EventHeroCardMetaGrid}>
          <View style={styles.EventHeroCardMetaCell}>
            <Text style={styles.EventHeroCardMetaIconSigil}>🕐</Text>
            <View>
              <Text style={styles.EventHeroCardMetaLabel}>Time</Text>
              <Text style={styles.EventHeroCardMetaValueGold}>{event.time}</Text>
            </View>
          </View>
          <View style={styles.EventHeroCardMetaCell}>
            <Text style={styles.EventHeroCardMetaIconSigil}>📅</Text>
            <View>
              <Text style={styles.EventHeroCardMetaLabel}>Date</Text>
              <Text style={styles.EventHeroCardMetaValueGold}>{event.date}</Text>
            </View>
          </View>
          <View
            style={[
              styles.EventHeroCardMetaCell,
              styles.EventHeroCardMetaCellWide,
            ]}>
            <Text style={styles.EventHeroCardMetaIconSigil}>📍</Text>
            <View>
              <Text style={styles.EventHeroCardMetaLabel}>Location</Text>
              <Text style={styles.EventHeroCardMetaValueCream}>
                {event.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

type EventSectionCardProps = {
  title: string;
  body: string;
};

export function EventSectionCard({title, body}: EventSectionCardProps) {
  return (
    <View style={styles.EventSectionCardFacetChassis}>
      <Text style={styles.EventSectionCardTitleFiligree}>{title}</Text>
      <Text style={styles.EventSectionCardBodyFiligree}>{body}</Text>
    </View>
  );
}

type EventSplitCardProps = {
  title: string;
  body: string;
};

export function EventSplitCard({title, body}: EventSplitCardProps) {
  return (
    <View style={styles.EventSplitCardFacetChassis}>
      <Text style={styles.EventSplitCardTitleFiligree}>{title}</Text>
      <Text style={styles.EventSplitCardBodyFiligree}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  EventListCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 4,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  EventListCardTopLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  EventListCardTimeEnclave: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  EventListCardTimeIconSigil: {
    fontSize: 12,
  },
  EventListCardTimeFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  EventListCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.23,
    marginTop: 8,
  },
  EventListCardLocationLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginTop: 4,
  },
  EventListCardLocationIconSigil: {
    fontSize: 12,
  },
  EventListCardLocationFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  EventListCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
    marginTop: 8,
  },
  EventListCardActionPortico: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
    marginTop: 12,
  },
  EventListCardActionPressedDim: {
    opacity: 0.85,
  },
  EventListCardActionFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  EventListCardActionArrowSigil: {
    color: colors.gold,
    fontSize: 14,
  },
  EventHeroCardFacetChassis: {
    borderColor: colors.borderMuted,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  EventHeroCardInset: {
    gap: 12,
    padding: 21,
  },
  EventHeroCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.26,
    lineHeight: 26,
  },
  EventHeroCardMetaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  EventHeroCardMetaCell: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 6,
    width: '46%',
  },
  EventHeroCardMetaCellWide: {
    width: '100%',
  },
  EventHeroCardMetaIconSigil: {
    fontSize: 14,
    marginTop: 2,
  },
  EventHeroCardMetaLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.12,
  },
  EventHeroCardMetaValueGold: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  EventHeroCardMetaValueCream: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  EventSectionCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    padding: 17,
  },
  EventSectionCardTitleFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 0.94,
    textTransform: 'uppercase',
  },
  EventSectionCardBodyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 6,
  },
  EventSplitCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    padding: 15,
  },
  EventSplitCardTitleFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.12,
    textTransform: 'uppercase',
  },
  EventSplitCardBodyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
    marginTop: 4,
  },
});
