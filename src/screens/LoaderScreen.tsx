import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {APP_BRAND_LINE, APP_FULL_TITLE} from '../constants/brand';
import {icons} from '../data/assets';
import {useAdaptive} from '../hooks/useAdaptive';
import {colors, fonts} from '../constants/theme';

const LOADER_DURATION_MS = 5000;

type LoaderScreenProps = {
  onComplete: () => void;
};

export function LoaderScreen({onComplete}: LoaderScreenProps) {
  const adaptive = useAdaptive();
  const progress = useRef(new Animated.Value(0)).current;
  const [percentLabel, setPercentLabel] = useState(0);

  useEffect(() => {
    const listenerId = progress.addListener(({value}) => {
      setPercentLabel(Math.round(value * 100));
    });

    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: LOADER_DURATION_MS,
      useNativeDriver: false,
    });

    animation.start(({finished}) => {
      if (finished) {
        onComplete();
      }
    });

    return () => {
      progress.removeListener(listenerId);
      animation.stop();
    };
  }, [onComplete, progress]);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.LoaderScreenFacetChassis}>
      <ImageBackground
        source={icons.loaderBg}
        style={styles.LoaderScreenBackground}
        resizeMode="cover">
        <View style={styles.LoaderScreenOverlayVeil} />

        <View style={styles.LoaderScreenContent}>
          <Image
            source={icons.loaderLogo}
            style={[styles.LoaderScreenLogoSigil]}
            resizeMode="contain"
          />

          <Text style={styles.LoaderScreenBrandFiligree}>{APP_BRAND_LINE}</Text>
          <Text style={styles.LoaderScreenTitleFiligree}>{APP_FULL_TITLE}</Text>
          <Text style={styles.LoaderScreenStatusFiligree}>
            Preparing your opening access…
          </Text>

          <View style={styles.LoaderScreenProgressTrack}>
            <Animated.View
              style={[styles.LoaderScreenProgressFill, {width: fillWidth}]}
            />
          </View>
          <Text style={styles.LoaderScreenPercentFiligree}>
            {percentLabel}%
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFacetChassis: {
    backgroundColor: colors.black,
    flex: 1,
  },
  LoaderScreenBackground: {
    flex: 1,
  },
  LoaderScreenOverlayVeil: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.loaderOverlay,
  },
  LoaderScreenContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  LoaderScreenLogoSigil: {
    marginBottom: 24,
  },
  LoaderScreenBrandFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 2.8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  LoaderScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    marginBottom: 6,
    textAlign: 'center',
  },
  LoaderScreenStatusFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    marginBottom: 48,
    textAlign: 'center',
  },
  LoaderScreenProgressTrack: {
    backgroundColor: colors.progressTrack,
    borderRadius: 2,
    height: 2,
    overflow: 'hidden',
    width: 200,
  },
  LoaderScreenProgressFill: {
    backgroundColor: colors.goldBright,
    height: 2,
  },
  LoaderScreenPercentFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    marginTop: 12,
  },
});
