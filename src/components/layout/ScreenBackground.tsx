import React, {type ReactNode} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

type ScreenBackgroundProps = {
  children: ReactNode;
};

export const SCREEN_HEADER_GRADIENT = [
  'rgba(19, 18, 40, 0.85)',
  'transparent',
] as const;

export function ScreenBackground({children}: ScreenBackgroundProps) {
  return (
    <ImageBackground
      source={require('../../assets/guest_arrival_onboardingscreen5.png')}
      style={styles.ScreenBackgroundFacetChassis}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ScreenBackgroundFacetChassis: {
    flex: 1,
  },
});
