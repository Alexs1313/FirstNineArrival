import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {PaginationDots} from '../components/nav/PaginationDots';
import {ONBOARDING_STEPS} from '../data/onboarding';
import {useAdaptive} from '../hooks/useAdaptive';
import {colors, fonts} from '../constants/theme';

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({onComplete}: OnboardingScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);

  const step = ONBOARDING_STEPS[stepIndex];
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;
  const overlayWidth = adaptive.width * (step.overlayWidthRatio ?? 0.88);

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
      return;
    }
    setStepIndex(prev => prev + 1);
  };

  return (
    <View style={styles.OnboardingScreenFacetChassis}>
      <ImageBackground
        source={step.background}
        style={styles.OnboardingScreenBackground}
        resizeMode="cover">
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <Pressable
            onPress={onComplete}
            style={[
              styles.OnboardingScreenTopSkip,
              {top: insets.top + adaptive.verticalScale(12)},
            ]}
            hitSlop={12}>
            <Text style={styles.OnboardingScreenTopSkipFiligree}>Skip</Text>
          </Pressable>
          <View
            style={[
              styles.OnboardingScreenContent,
              {paddingBottom: insets.bottom + adaptive.verticalScale(28)},
            ]}>
            <View style={styles.OnboardingScreenHeroEnclave}>
              <Image
                source={step.overlay}
                style={[styles.OnboardingScreenOverlaySigil]}
                resizeMode="contain"
              />

              <Text style={styles.OnboardingScreenTitleFiligree}>
                {step.title}
              </Text>
              <Text style={styles.OnboardingScreenDescription}>
                {step.description}
              </Text>

              {step.tags ? (
                <View style={styles.OnboardingScreenTagsLintel}>
                  {step.tags.map(tag => (
                    <View key={tag} style={styles.OnboardingScreenTagChip}>
                      <Text style={styles.OnboardingScreenTagFiligree}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>

            <View style={styles.OnboardingScreenFooter}>
              <PaginationDots
                total={ONBOARDING_STEPS.length}
                activeIndex={stepIndex}
              />

              <PrimaryButton
                label={isLastStep ? step.buttonLabel : `${step.buttonLabel} ›`}
                onPress={handleNext}
                fullWidth
                style={styles.OnboardingScreenPrimaryAction}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenFacetChassis: {
    backgroundColor: colors.background,
    flex: 1,
  },
  OnboardingScreenBackground: {
    flex: 1,
  },
  OnboardingScreenHeroGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  OnboardingScreenTopSkip: {
    position: 'absolute',
    right: 28,
    zIndex: 2,
  },

  OnboardingScreenTopSkipFiligree: {
    color: colors.skip,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  OnboardingScreenContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 72,
  },
  OnboardingScreenHeroEnclave: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  OnboardingScreenOverlaySigil: {
    maxHeight: 360,
  },

  OnboardingScreenTagsLintel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    marginTop: 12,
    paddingHorizontal: 8,
  },
  OnboardingScreenTagChip: {
    backgroundColor: 'rgba(19, 18, 40, 0.72)',
    borderColor: colors.goldBorder,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  OnboardingScreenTagFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
  },
  OnboardingScreenFooter: {
    gap: 10,
    paddingTop: 8,
  },
  OnboardingScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 12,
  },
  OnboardingScreenDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 6,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  OnboardingScreenPrimaryAction: {
    marginTop: 2,
  },
});
