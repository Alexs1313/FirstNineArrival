import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OutlineButton} from '../components/buttons/PrimaryButton';
import {SubScreenHeader} from '../components/nav/SubScreenHeader';
import {PassQrCode} from '../components/pass/PassQrCode';
import {PASS_DETAILS} from '../data/passInfo';
import {useApp} from '../context/AppContext';
import {useAdaptive} from '../hooks/useAdaptive';
import {useBrightnessToggle} from '../hooks/useBrightnessToggle';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

function DetailCell({
  label,
  value,
  accent,
  success,
}: {
  label: string;
  value: string;
  accent?: boolean;
  success?: boolean;
}) {
  return (
    <View style={styles.FullScreenPassScreenDetailCell}>
      <Text style={styles.FullScreenPassScreenDetailLabel}>{label}</Text>
      <Text
        style={[
          styles.FullScreenPassScreenDetailValue,
          accent && styles.FullScreenPassScreenDetailValueAccent,
          success && styles.FullScreenPassScreenDetailValueSuccess,
        ]}>
        {value}
      </Text>
    </View>
  );
}

export function FullScreenPassScreen() {
  const {openEntryRules} = useAppNavigation();
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const {passId} = useApp();
  const {isMaxBrightness, toggleBrightness} = useBrightnessToggle();

  return (
    <View style={styles.FullScreenPassScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.FullScreenPassScreenScrollContent,
          {paddingBottom: insets.bottom + 32},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.FullScreenPassScreenHeaderWrap}>
          <SubScreenHeader title="Opening Event Pass" />
        </View>

        <View style={styles.FullScreenPassScreenStatusEnclave}>
          <View style={styles.FullScreenPassScreenStatusDot} />
        </View>

        <View style={styles.FullScreenPassScreenTitleBlock}>
          <Text style={styles.FullScreenPassScreenEventFiligree}>
            {PASS_DETAILS.eventLabel}
          </Text>
          <Text style={styles.FullScreenPassScreenTitleFiligree}>
            {PASS_DETAILS.passTitle}
          </Text>
        </View>

        <PassQrCode value={passId} size={adaptive.scale(200)} variant="pass" />

        <View style={styles.FullScreenPassScreenInfoCard}>
          <View style={styles.FullScreenPassScreenGrid}>
            <DetailCell label="PASS ID" value={passId} accent />
            <DetailCell label="STATUS" value={PASS_DETAILS.status} success />
            <DetailCell
              label="GUEST TYPE"
              value={PASS_DETAILS.guestType}
              accent
            />
            <DetailCell label="VALIDITY" value={PASS_DETAILS.validity} accent />
            <DetailCell
              label="ACCESS TYPE"
              value={PASS_DETAILS.accessType}
              accent
            />
            <DetailCell label="DATE" value={PASS_DETAILS.dateLabel} accent />
          </View>
        </View>

        <Text style={styles.FullScreenPassScreenHintFiligree}>
          Show this screen when requested by guest service staff.
        </Text>

        <View style={styles.FullScreenPassScreenActionsLintel}>
          <OutlineButton
            label={
              isMaxBrightness
                ? 'Maximum Brightness Active'
                : 'Increase Brightness'
            }
            onPress={toggleBrightness}
            icon="☀️"
            fullWidth
            compact
            tone="surface"
            active={isMaxBrightness}
          />
          <OutlineButton
            label="Entry Rules"
            onPress={openEntryRules}
            icon="🛡️"
            fullWidth
            compact
            tone="gold"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FullScreenPassScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  FullScreenPassScreenScrollContent: {
    alignItems: 'center',
    gap: 0,
    paddingHorizontal: 24,
  },
  FullScreenPassScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -24,
  },
  FullScreenPassScreenStatusEnclave: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 24,
  },
  FullScreenPassScreenStatusDot: {
    backgroundColor: colors.status,
    borderRadius: 4,
    height: 8,
    shadowColor: colors.status,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 12,
    width: 8,
  },
  FullScreenPassScreenTitleBlock: {
    alignItems: 'center',
    gap: 4,
    marginBottom: 24,
  },

  FullScreenPassScreenEventFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 1.38,
    lineHeight: 16.5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  FullScreenPassScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.45,
    lineHeight: 30,
    textAlign: 'center',
  },
  FullScreenPassScreenInfoCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    marginTop: 24,
    paddingHorizontal: 21,
    paddingVertical: 17,
    width: '100%',
  },
  FullScreenPassScreenGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 12,
  },
  FullScreenPassScreenDetailCell: {
    gap: 1,
    width: '50%',
  },

  FullScreenPassScreenDetailLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.92,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  FullScreenPassScreenDetailValue: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: -0.08,
    lineHeight: 19.5,
  },
  FullScreenPassScreenDetailValueAccent: {
    color: colors.gold,
  },
  FullScreenPassScreenDetailValueSuccess: {
    color: colors.status,
  },
  FullScreenPassScreenHintFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  FullScreenPassScreenActionsLintel: {
    gap: 10,
    width: '100%',
  },
});
