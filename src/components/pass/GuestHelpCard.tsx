import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryButton} from '../buttons/PrimaryButton';
import {colors, fonts} from '../../constants/theme';

type GuestHelpCardProps = {
  onStartChat: () => void;
};

export function GuestHelpCard({onStartChat}: GuestHelpCardProps) {
  return (
    <View style={styles.GuestHelpCardFacetChassis}>
      <View style={styles.GuestHelpCardHeaderLintel}>
        <View style={styles.GuestHelpCardIconEnclave}>
          <Text style={styles.GuestHelpCardIconSigil}>?</Text>
        </View>
        <View style={styles.GuestHelpCardTextEnclave}>
          <Text style={styles.GuestHelpCardTitleFiligree}>Guest Help</Text>
          <Text style={styles.GuestHelpCardSubtitleFiligree}>
            Opening night support
          </Text>
        </View>
      </View>

      <Text style={styles.GuestHelpCardDescription}>
        Need help with entry, event timing, menu orders, service booking, taxi
        requests, or offers?
      </Text>

      <PrimaryButton
        label="Start Help Chat"
        onPress={onStartChat}
        fullWidth
        icon="💬"
        compact
      />
    </View>
  );
}

const styles = StyleSheet.create({
  GuestHelpCardFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: 18,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  GuestHelpCardHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  GuestHelpCardIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(221, 184, 74, 0.12)',
    borderColor: colors.goldBorder,
    borderRadius: 12,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  GuestHelpCardIconSigil: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '700',
  },
  GuestHelpCardTextEnclave: {
    flex: 1,
    gap: 2,
  },
  GuestHelpCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },
  GuestHelpCardSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  GuestHelpCardDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19,
  },
});
