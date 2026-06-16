import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppNavigation} from '../../navigation/NavigationContext';
import {colors, fonts} from '../../constants/theme';
import {SavedChipButton} from '../events/SavedChipButton';

type OfferDetailHeaderProps = {
  savedActive: boolean;
  onSavedPress: () => void;
};

export function OfferDetailHeader({
  savedActive,
  onSavedPress,
}: OfferDetailHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.OfferScreenHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.OfferScreenHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.OfferScreenHeaderBackPortico,
            pressed && styles.OfferScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.OfferScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        <Pressable
          onPress={onSavedPress}
          style={({pressed}) => [
            styles.OfferScreenHeaderSaveChip,
            savedActive && styles.OfferScreenHeaderSaveChipActive,
            pressed && styles.OfferScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.OfferScreenHeaderSaveIconSigil}>🔖</Text>
          <Text style={styles.OfferScreenHeaderSaveFiligree}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

type SavedOffersHeaderProps = {
  count: number;
};

export function SavedOffersHeader({count}: SavedOffersHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.OfferScreenHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.SavedOffersHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.OfferScreenHeaderBackPortico,
            pressed && styles.OfferScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.OfferScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        <View style={styles.SavedOffersHeaderTextEnclave}>
          <Text style={styles.SavedOffersHeaderTitleFiligree}>Saved Offers</Text>
          <Text style={styles.SavedOffersHeaderSubtitleFiligree}>
            {count} {count === 1 ? 'offer' : 'offers'} saved
          </Text>
        </View>
      </View>
    </View>
  );
}

export function OffersListSavedChip({onPress}: {onPress: () => void}) {
  return <SavedChipButton onPress={onPress} />;
}

const styles = StyleSheet.create({
  OfferScreenHeaderFacetChassis: {
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
  OfferScreenHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SavedOffersHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  OfferScreenHeaderBackPortico: {
    minWidth: 60,
  },
  OfferScreenHeaderBackPressedDim: {
    opacity: 0.7,
  },
  OfferScreenHeaderBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  OfferScreenHeaderSaveChip: {
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
  OfferScreenHeaderSaveChipActive: {
    backgroundColor: 'rgba(196, 145, 44, 0.09)',
    borderColor: colors.buttonGradientStart,
  },
  OfferScreenHeaderSaveIconSigil: {
    fontSize: 14,
  },
  OfferScreenHeaderSaveFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
  },
  SavedOffersHeaderTextEnclave: {
    flex: 1,
    gap: 2,
  },
  SavedOffersHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.31,
  },
  SavedOffersHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 0.06,
  },
});
