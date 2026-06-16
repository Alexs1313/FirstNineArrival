import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppNavigation} from '../../navigation/NavigationContext';
import {colors, fonts} from '../../constants/theme';
import {CartChipButton} from './MenuBadges';

type MenuScreenHeaderProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  cartCount?: number;
  onCartPress?: () => void;
  rightAction?: React.ReactNode;
  showBack?: boolean;
};

export function MenuScreenHeader({
  title,
  subtitle,
  eyebrow,
  cartCount,
  onCartPress,
  rightAction,
  showBack = false,
}: MenuScreenHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.MenuScreenHeaderInset, {paddingTop: insets.top + 8}]}>
      {showBack ? (
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.MenuScreenHeaderBackPortico,
            pressed && styles.MenuScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.MenuScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
      ) : null}
      <View style={styles.MenuScreenHeaderRowLintel}>
        <View style={styles.MenuScreenHeaderTextEnclave}>
          {eyebrow ? (
            <Text style={styles.MenuScreenHeaderEyebrowFiligree}>{eyebrow}</Text>
          ) : null}
          <Text style={styles.MenuScreenHeaderTitleFiligree}>{title}</Text>
          <Text style={styles.MenuScreenHeaderSubtitleFiligree}>{subtitle}</Text>
        </View>
        {rightAction ??
          (onCartPress ? (
            <CartChipButton count={cartCount ?? 0} onPress={onCartPress} />
          ) : null)}
      </View>
    </View>
  );
}

type MenuDetailHeaderProps = {
  featured?: boolean;
};

export function MenuDetailHeader({featured}: MenuDetailHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.MenuDetailHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.MenuDetailHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.MenuDetailHeaderBackPortico,
            pressed && styles.MenuDetailHeaderBackPressedDim,
          ]}>
          <Text style={styles.MenuDetailHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        {featured ? (
          <View style={styles.MenuDetailHeaderFeaturedBadge}>
            <Text style={styles.MenuDetailHeaderFeaturedFiligree}>FEATURED</Text>
          </View>
        ) : (
          <View style={styles.MenuDetailHeaderSpacer} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuScreenHeaderInset: {
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
  MenuScreenHeaderBackPortico: {
    marginBottom: 8,
  },
  MenuScreenHeaderBackPressedDim: {
    opacity: 0.7,
  },
  MenuScreenHeaderBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  MenuScreenHeaderRowLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MenuScreenHeaderTextEnclave: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  MenuScreenHeaderEyebrowFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1.12,
    textTransform: 'uppercase',
  },
  MenuScreenHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.07,
    lineHeight: 29,
  },
  MenuScreenHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 19.5,
    marginTop: 3,
  },
  MenuDetailHeaderFacetChassis: {
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
  MenuDetailHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MenuDetailHeaderBackPortico: {
    minWidth: 60,
  },
  MenuDetailHeaderBackPressedDim: {
    opacity: 0.7,
  },
  MenuDetailHeaderBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  MenuDetailHeaderFeaturedBadge: {
    backgroundColor: 'rgba(196, 145, 44, 0.12)',
    borderColor: 'rgba(196, 145, 44, 0.35)',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  MenuDetailHeaderFeaturedFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  MenuDetailHeaderSpacer: {
    width: 60,
  },
});
