import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OutlineButton} from '../components/buttons/PrimaryButton';
import {GuestHelpCard} from '../components/pass/GuestHelpCard';
import {OpeningPassCard} from '../components/pass/OpeningPassCard';
import {APP_DISPLAY_NAME} from '../constants/brand';
import {useApp} from '../context/AppContext';
import {useBrightnessToggle} from '../hooks/useBrightnessToggle';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function PassScreen() {
  const {openFullScreenPass, openEntryRules, openGuestHelp} =
    useAppNavigation();
  const insets = useSafeAreaInsets();
  const {passId} = useApp();
  const {isMaxBrightness, toggleBrightness} = useBrightnessToggle();

  return (
    <View style={styles.PassScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.PassScreenScrollContent,
          {paddingTop: insets.top + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.PassScreenHeader}>
          <Text style={styles.PassScreenWelcomeFiligree}>WELCOME TO</Text>
          <Text style={styles.PassScreenTitleFiligree}>{APP_DISPLAY_NAME}</Text>
          <Text style={styles.PassScreenSubtitleFiligree}>
            Your guest access for the Nine Casino arrival.
          </Text>
        </View>

        <OpeningPassCard passId={passId} onShowFullPass={openFullScreenPass} />

        <View style={styles.PassScreenActionsLintel}>
          <OutlineButton
            label={
              isMaxBrightness
                ? 'Maximum Brightness Active'
                : 'Increase Brightness'
            }
            onPress={toggleBrightness}
            icon="☀️"
            active={isMaxBrightness}
            compact
          />
          <OutlineButton
            label="View Entry Rules"
            onPress={openEntryRules}
            icon="🛡️"
            compact
          />
        </View>

        <GuestHelpCard onStartChat={openGuestHelp} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  PassScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  PassScreenScrollContent: {
    gap: 14,
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  PassScreenHeader: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    gap: 4,
    marginBottom: 4,
    marginHorizontal: -layout.screenPadding,
    paddingBottom: 15,
    paddingHorizontal: layout.screenPadding,
  },

  PassScreenWelcomeFiligree: {
    color: colors.body,
    fontFamily: fonts.sansSemiBold,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  PassScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifBold,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 32,
  },
  PassScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 18,
  },

  PassScreenActionsLintel: {
    flexDirection: 'row',
    gap: 10,
  },
});
