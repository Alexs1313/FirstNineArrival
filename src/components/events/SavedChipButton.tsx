import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type SavedChipButtonProps = {
  onPress: () => void;
  active?: boolean;
};

export function SavedChipButton({onPress, active = false}: SavedChipButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.SavedChipButtonFacetChassis,
        active && styles.SavedChipButtonFacetChassisActive,
        pressed && styles.SavedChipButtonPressedDim,
      ]}>
      <Text style={styles.SavedChipButtonIconSigil}>🔖</Text>
      <Text
        style={[
          styles.SavedChipButtonFiligree,
          active && styles.SavedChipButtonFiligreeActive,
        ]}>
        Saved
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SavedChipButtonFacetChassis: {
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
  SavedChipButtonFacetChassisActive: {
    backgroundColor: 'rgba(196, 145, 44, 0.09)',
    borderColor: colors.buttonGradientStart,
  },
  SavedChipButtonPressedDim: {
    opacity: 0.85,
  },
  SavedChipButtonIconSigil: {
    fontSize: 14,
  },
  SavedChipButtonFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.06,
  },
  SavedChipButtonFiligreeActive: {
    color: colors.buttonGradientStart,
  },
});
