import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {OfferTag} from '../../data/offers';
import {OFFER_TAG_STYLES} from '../../data/offers';
import {colors, fonts} from '../../constants/theme';

type OfferTagBadgeProps = {
  tag: OfferTag;
};

export function OfferTagBadge({tag}: OfferTagBadgeProps) {
  const style = OFFER_TAG_STYLES[tag];

  return (
    <View
      style={[
        styles.OfferTagBadgeFacetChassis,
        {backgroundColor: style.background},
      ]}>
      <Text style={[styles.OfferTagBadgeFiligree, {color: style.color}]}>
        {tag.toUpperCase()}
      </Text>
    </View>
  );
}

type OfferValidityRowProps = {
  validity: string;
};

export function OfferValidityRow({validity}: OfferValidityRowProps) {
  return (
    <View style={styles.OfferValidityRowLintel}>
      <Text style={styles.OfferValidityRowIconSigil}>🕐</Text>
      <Text style={styles.OfferValidityRowFiligree}>Valid: {validity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  OfferTagBadgeFacetChassis: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OfferTagBadgeFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  OfferValidityRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  OfferValidityRowIconSigil: {
    fontSize: 12,
  },
  OfferValidityRowFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 12,
    fontWeight: '600',
  },
});
