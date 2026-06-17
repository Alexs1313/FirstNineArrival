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
import {colors, fonts} from '../constants/theme';

type LoaderScreenProps = {
  onComplete: () => void;
};

export function LoaderScreen({onComplete}: LoaderScreenProps) {
  const progress = useRef(new Animated.Value(0)).current;
  const [percentLabelToDisplay, setPercentLabelToDisplay] = useState(0);

  useEffect(() => {
    const listenerId = progress.addListener(({value}) => {
      setPercentLabelToDisplay(Math.round(value * 100));
    });

    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
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
        <View style={styles.LoaderScreenContent}>
          <Image
            source={icons.loaderLogo}
            style={[styles.LoaderScreenLogoSigil]}
            resizeMode="contain"
          />

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
            {percentLabelToDisplay}%
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
    width: 200,
    height: 200,
    borderRadius: 50,
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
