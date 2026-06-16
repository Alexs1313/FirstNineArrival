import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import type {MenuCategory} from '../../data/menu';
import {MENU_CATEGORY_STYLES} from '../../data/menu';
import {fonts} from '../../constants/theme';

type MenuCategoryBadgeProps = {
  category: MenuCategory;
};

export function MenuCategoryBadge({category}: MenuCategoryBadgeProps) {
  const palette = MENU_CATEGORY_STYLES[category];

  return (
    <View
      style={[
        styles.MenuCategoryBadgeFacetChassis,
        {backgroundColor: palette.background},
      ]}>
      <Text style={[styles.MenuCategoryBadgeFiligree, {color: palette.color}]}>
        {category}
      </Text>
    </View>
  );
}

type CartChipButtonProps = {
  count: number;
  onPress: () => void;
};

export function CartChipButton({count, onPress}: CartChipButtonProps) {
  const hasItems = count > 0;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.CartChipButtonFacetChassis,
        pressed && styles.CartChipButtonPressedDim,
      ]}>
      <Text style={styles.CartChipButtonIconSigil}>🛍️</Text>
      <Text style={styles.CartChipButtonCountFiligree}>{count}</Text>
      {hasItems ? <View style={styles.CartChipButtonDot} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  MenuCategoryBadgeFacetChassis: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  MenuCategoryBadgeFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.61,
    textTransform: 'uppercase',
  },
  CartChipButtonFacetChassis: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: '#222040',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
  },
  CartChipButtonPressedDim: {
    opacity: 0.85,
  },
  CartChipButtonIconSigil: {
    fontSize: 16,
  },
  CartChipButtonCountFiligree: {
    color: '#c4912c',
    fontFamily: fonts.sansBold,
    fontSize: 12,
    fontWeight: '700',
  },
  CartChipButtonDot: {
    backgroundColor: '#c4912c',
    borderRadius: 4,
    height: 8,
    position: 'absolute',
    right: -4,
    top: -4,
    width: 8,
  },
});
