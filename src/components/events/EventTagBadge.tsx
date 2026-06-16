import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import type {EventTag} from '../../data/events';
import {EVENT_TAG_STYLES} from '../../data/events';
import {fonts} from '../../constants/theme';

type EventTagBadgeProps = {
  tag: EventTag;
};

export function EventTagBadge({tag}: EventTagBadgeProps) {
  const palette = EVENT_TAG_STYLES[tag];

  return (
    <View style={[styles.EventTagBadgeFacetChassis, {backgroundColor: palette.background}]}>
      <Text style={[styles.EventTagBadgeFiligree, {color: palette.color}]}>
        {tag}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  EventTagBadgeFacetChassis: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  EventTagBadgeFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.61,
    textTransform: 'uppercase',
  },
});
