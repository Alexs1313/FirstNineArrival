import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type {MenuItem} from '../../data/menu';
import {formatEuro} from '../../data/menu';
import {colors, fonts, layout} from '../../constants/theme';
import {MenuCategoryBadge} from './MenuBadges';

type MenuListCardProps = {
  item: MenuItem;
  onPress: () => void;
};

export function MenuListCard({item, onPress}: MenuListCardProps) {
  return (
    <View style={styles.MenuListCardFacetChassis}>
      <View style={styles.MenuListCardInset}>
        <Image source={item.image} style={styles.MenuListCardImage} />

        <View style={styles.MenuListCardTopLintel}>
          <MenuCategoryBadge category={item.category} />
          <Text style={styles.MenuListCardPriceFiligree}>
            {formatEuro(item.price)}
          </Text>
        </View>

        <Text style={styles.MenuListCardTitleFiligree}>{item.title}</Text>
        <Text style={styles.MenuListCardDescriptionFiligree} numberOfLines={2}>
          {item.description}
        </Text>

        <Pressable
          onPress={onPress}
          style={({pressed}) => [
            styles.MenuListCardActionPortico,
            pressed && styles.MenuListCardActionPressedDim,
          ]}>
          <Text style={styles.MenuListCardActionFiligree}>View Item</Text>
          <Text style={styles.MenuListCardActionArrowSigil}>→</Text>
        </Pressable>
      </View>
    </View>
  );
}

type QuantityStepperProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityStepperProps) {
  return (
    <View style={styles.QuantityStepperLintel}>
      <Pressable
        onPress={onDecrease}
        style={({pressed}) => [
          styles.QuantityStepperButton,
          pressed && styles.QuantityStepperButtonPressedDim,
        ]}>
        <Text style={styles.QuantityStepperButtonFiligree}>−</Text>
      </Pressable>
      <Text style={styles.QuantityStepperValueFiligree}>{quantity}</Text>
      <Pressable
        onPress={onIncrease}
        style={({pressed}) => [
          styles.QuantityStepperButton,
          styles.QuantityStepperButtonPlus,
          pressed && styles.QuantityStepperButtonPressedDim,
        ]}>
        <Text
          style={[
            styles.QuantityStepperButtonFiligree,
            styles.QuantityStepperButtonPlusFiligree,
          ]}>
          +
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuListCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  MenuListCardInset: {
    gap: 0,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  MenuListCardImage: {
    borderRadius: 16,
    height: 110,
    width: '100%',
  },
  MenuListCardTopLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '100%',
  },
  MenuListCardPriceFiligree: {
    color: colors.goldBright,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: -0.43,
  },
  MenuListCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.23,
    marginTop: 8,
  },
  MenuListCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
    marginTop: 6,
  },
  MenuListCardActionPortico: {
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
  MenuListCardActionPressedDim: {
    opacity: 0.85,
  },
  MenuListCardActionFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  MenuListCardActionArrowSigil: {
    color: colors.gold,
    fontSize: 14,
  },
  QuantityStepperLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  QuantityStepperButton: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: colors.borderMuted,
    borderRadius: 100,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  QuantityStepperButtonPlus: {
    borderColor: colors.buttonGradientStart,
  },
  QuantityStepperButtonPressedDim: {
    opacity: 0.85,
  },
  QuantityStepperButtonFiligree: {
    color: colors.label,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '700',
  },
  QuantityStepperButtonPlusFiligree: {
    color: colors.buttonGradientStart,
  },
  QuantityStepperValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '700',
    minWidth: 20,
    textAlign: 'center',
  },
});
