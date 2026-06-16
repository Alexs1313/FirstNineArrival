import React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, fonts, layout} from '../../constants/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
  icon?: string;
  compact?: boolean;
};

export function PrimaryButton({
  label,
  onPress,
  style,
  fullWidth = false,
  icon,
  compact = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[fullWidth && styles.PrimaryButtonButtonWide, style]}>
      {({pressed}) => (
        <LinearGradient
          colors={[colors.buttonGradientStart, colors.buttonGradientEnd]}
          style={[
            styles.PrimaryButtonBtnPortico,
            compact && styles.PrimaryButtonBtnCompact,
            pressed && styles.PrimaryButtonButtonPressedDim,
          ]}>
          {icon ? (
            <Text style={styles.PrimaryButtonIconSigil}>{icon}</Text>
          ) : null}
          <Text style={styles.PrimaryButtonLabelFiligree}>{label}</Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

type OutlineButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
  icon?: string;
  active?: boolean;
  compact?: boolean;
  tone?: 'default' | 'surface' | 'gold';
};

export function OutlineButton({
  label,
  onPress,
  style,
  fullWidth = false,
  icon,
  active = false,
  compact = false,
  tone = 'default',
}: OutlineButtonProps) {
  const isSurfaceTone = tone === 'surface';
  const isGoldTone = tone === 'gold';

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.OutlineButtonBtnPortico,
        compact && styles.OutlineButtonBtnCompact,
        isGoldTone && styles.OutlineButtonBtnGold,
        isSurfaceTone && !active && styles.OutlineButtonBtnSurface,
        isSurfaceTone && active && styles.OutlineButtonBtnSurfaceActive,
        !isSurfaceTone &&
          !isGoldTone &&
          active &&
          styles.OutlineButtonBtnActive,
        fullWidth && styles.OutlineButtonButtonWide,
        pressed && styles.PrimaryButtonButtonPressedDim,
        style,
      ]}>
      {icon ? <Text style={styles.OutlineButtonIconSigil}>{icon}</Text> : null}
      <Text
        style={[
          styles.OutlineButtonLabelFiligree,
          compact && styles.OutlineButtonLabelCompact,
          isGoldTone && styles.OutlineButtonLabelGold,
          isSurfaceTone && !active && styles.OutlineButtonLabelMuted,
          isSurfaceTone && active && styles.OutlineButtonLabelSurfaceActive,
          !isSurfaceTone &&
            !isGoldTone &&
            active &&
            styles.OutlineButtonLabelActive,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PrimaryButtonBtnPortico: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 8,
    height: layout.buttonHeightDefault,
    justifyContent: 'center',
  },
  PrimaryButtonBtnCompact: {
    flex: 0,
    height: layout.buttonHeightCompact,
    minHeight: layout.buttonHeightCompact,
  },
  PrimaryButtonButtonWide: {
    flex: 0,
    width: '100%',
  },
  PrimaryButtonButtonPressedDim: {
    opacity: 0.85,
  },
  PrimaryButtonIconSigil: {
    fontSize: 16,
  },
  PrimaryButtonLabelFiligree: {
    color: colors.buttonText,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },
  OutlineButtonBtnPortico: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.goldBorder,
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  OutlineButtonBtnCompact: {
    borderRadius: 13,
    height: layout.buttonHeightCompact,
    minHeight: layout.buttonHeightCompact,
    paddingVertical: 0,
  },
  OutlineButtonBtnSurface: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
  },
  OutlineButtonBtnSurfaceActive: {
    backgroundColor: 'rgba(196, 145, 44, 0.13)',
    borderColor: colors.buttonGradientStart,
  },
  OutlineButtonBtnGold: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(196, 145, 44, 0.53)',
  },
  OutlineButtonBtnActive: {
    borderColor: colors.gold,
  },
  OutlineButtonButtonWide: {
    flex: 0,
    width: '100%',
  },
  OutlineButtonIconSigil: {
    fontSize: 15,
  },
  OutlineButtonLabelFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  OutlineButtonLabelCompact: {
    fontSize: 14,
    letterSpacing: -0.15,
    lineHeight: 21,
  },
  OutlineButtonLabelMuted: {
    color: colors.body,
  },
  OutlineButtonLabelSurfaceActive: {
    color: colors.goldBright,
  },
  OutlineButtonLabelGold: {
    color: colors.buttonGradientStart,
  },
  OutlineButtonLabelActive: {
    color: colors.gold,
  },
});
