import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import type {ServiceTag} from '../../data/services';
import {SERVICE_TAG_STYLES} from '../../data/services';
import {colors, fonts, layout} from '../../constants/theme';

type ServiceTagBadgeProps = {
  tag: ServiceTag;
};

export function ServiceTagBadge({tag}: ServiceTagBadgeProps) {
  const style = SERVICE_TAG_STYLES[tag];

  return (
    <View style={[styles.ServiceTagBadgeFacetChassis, {backgroundColor: style.background}]}>
      <Text style={[styles.ServiceTagBadgeFiligree, {color: style.color}]}>
        {tag.toUpperCase()}
      </Text>
    </View>
  );
}

type MyRequestsChipButtonProps = {
  onPress: () => void;
};

export function MyRequestsChipButton({onPress}: MyRequestsChipButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.MyRequestsChipButtonFacetChassis,
        pressed && styles.MyRequestsChipButtonPressedDim,
      ]}>
      <Text style={styles.MyRequestsChipButtonIconSigil}>📋</Text>
      <Text style={styles.MyRequestsChipButtonFiligree}>My Requests</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ServiceTagBadgeFacetChassis: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ServiceTagBadgeFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  MyRequestsChipButtonFacetChassis: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: colors.borderMuted,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  MyRequestsChipButtonPressedDim: {
    opacity: 0.85,
  },
  MyRequestsChipButtonIconSigil: {
    fontSize: 14,
  },
  MyRequestsChipButtonFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.06,
  },
});