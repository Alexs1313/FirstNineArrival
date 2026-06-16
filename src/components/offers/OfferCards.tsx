import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import type {OfferItem} from '../../data/offers';
import {colors, fonts, layout} from '../../constants/theme';
import {OfferTagBadge, OfferValidityRow} from './OfferBadges';

type OfferListCardProps = {
  offer: OfferItem;
  onPress: () => void;
};

export function OfferListCard({offer, onPress}: OfferListCardProps) {
  return (
    <View style={styles.OfferListCardFacetChassis}>
      <View style={styles.OfferListCardInset}>
        <View style={styles.OfferListCardTopLintel}>
          <OfferTagBadge tag={offer.tag} />
        </View>

        <Text style={styles.OfferListCardTitleFiligree}>{offer.title}</Text>
        <OfferValidityRow validity={offer.validity} />
        <Text style={styles.OfferListCardDescriptionFiligree} numberOfLines={2}>
          {offer.description}
        </Text>

        <Pressable
          onPress={onPress}
          style={({pressed}) => [
            styles.OfferListCardActionPortico,
            pressed && styles.OfferListCardActionPressedDim,
          ]}>
          <Text style={styles.OfferListCardActionFiligree}>View Offer</Text>
          <Text style={styles.OfferListCardActionArrowSigil}>→</Text>
        </Pressable>
      </View>
    </View>
  );
}

type OfferHeroCardProps = {
  offer: OfferItem;
};

export function OfferHeroCard({offer}: OfferHeroCardProps) {
  return (
    <View style={styles.OfferHeroCardFacetChassis}>
      <View style={styles.OfferHeroCardInset}>
        <View style={styles.OfferHeroCardTopLintel}>
          <View style={styles.OfferHeroCardIconEnclave}>
            <Text style={styles.OfferHeroCardIconSigil}>{offer.icon}</Text>
          </View>
          <View style={styles.OfferHeroCardMetaEnclave}>
            <OfferTagBadge tag={offer.tag} />
            <OfferValidityRow validity={offer.validity} />
          </View>
        </View>

        <Text style={styles.OfferHeroCardTitleFiligree}>{offer.title}</Text>
        <Text style={styles.OfferHeroCardDescriptionFiligree}>
          {offer.description}
        </Text>
      </View>
    </View>
  );
}

type OfferSectionCardProps = {
  title: string;
  body: string;
};

export function OfferSectionCard({title, body}: OfferSectionCardProps) {
  return (
    <View style={styles.OfferSectionCardFacetChassis}>
      <Text style={styles.OfferSectionCardTitleFiligree}>{title}</Text>
      <Text style={styles.OfferSectionCardBodyFiligree}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  OfferListCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
  },
  OfferListCardInset: {
    gap: 8,
    padding: 16,
  },
  OfferListCardTopLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  OfferListCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.23,
  },
  OfferListCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
  },
  OfferListCardActionPortico: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
    marginTop: 4,
  },
  OfferListCardActionPressedDim: {
    opacity: 0.85,
  },
  OfferListCardActionFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  OfferListCardActionArrowSigil: {
    color: colors.gold,
    fontSize: 14,
  },
  OfferHeroCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
  },
  OfferHeroCardInset: {
    gap: 10,
    padding: 16,
  },
  OfferHeroCardTopLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
  },
  OfferHeroCardIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(196, 145, 44, 0.1)',
    borderColor: 'rgba(196, 145, 44, 0.25)',
    borderRadius: 14,
    borderWidth: 1,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  OfferHeroCardIconSigil: {
    fontSize: 24,
  },
  OfferHeroCardMetaEnclave: {
    flex: 1,
    gap: 8,
  },
  OfferHeroCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  OfferHeroCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
  },
  OfferSectionCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 16,
  },
  OfferSectionCardTitleFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
  },
  OfferSectionCardBodyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 20,
  },
});
