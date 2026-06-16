import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryButton} from '../buttons/PrimaryButton';
import {APP_FULL_TITLE} from '../../constants/brand';
import {PASS_DETAILS} from '../../data/passInfo';
import {colors, fonts} from '../../constants/theme';

type OpeningPassCardProps = {
  passId: string;
  onShowFullPass: () => void;
};

function DetailCell({label, value, accent}: {label: string; value: string; accent?: boolean}) {
  return (
    <View style={styles.OpeningPassCardDetailCell}>
      <Text style={styles.OpeningPassCardDetailLabel}>{label}</Text>
      <Text
        style={[
          styles.OpeningPassCardDetailValue,
          accent && styles.OpeningPassCardDetailValueAccent,
        ]}>
        {value}
      </Text>
    </View>
  );
}

export function OpeningPassCard({passId, onShowFullPass}: OpeningPassCardProps) {
  return (
    <View style={styles.OpeningPassCardFacetChassis}>
      <View style={styles.OpeningPassCardHeaderLintel}>
        <Text style={styles.OpeningPassCardBadgeFiligree}>
          OPENING EVENT PASS
        </Text>
        <View style={styles.OpeningPassCardActiveBadge}>
          <View style={styles.OpeningPassCardActiveDot} />
          <Text style={styles.OpeningPassCardActiveFiligree}>Active</Text>
        </View>
      </View>

      <Text style={styles.OpeningPassCardTitleFiligree}>{APP_FULL_TITLE}</Text>
      <Text style={styles.OpeningPassCardDescription}>
        Present this pass when guest access or service confirmation is
        requested.
      </Text>

      <View style={styles.OpeningPassCardGrid}>
        <DetailCell label="GUEST TYPE" value={PASS_DETAILS.guestType} accent />
        <DetailCell label="ACCESS" value={PASS_DETAILS.access} accent />
        <DetailCell label="VALIDITY" value={PASS_DETAILS.validity} accent />
        <DetailCell label="PASS ID" value={passId} accent />
      </View>

      <PrimaryButton
        label="Show Full Pass"
        onPress={onShowFullPass}
        fullWidth
        icon="▦"
        compact
      />
    </View>
  );
}

const styles = StyleSheet.create({
  OpeningPassCardFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: 18,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  OpeningPassCardHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OpeningPassCardBadgeFiligree: {
    color: colors.body,
    fontFamily: fonts.sansSemiBold,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
  OpeningPassCardActiveBadge: {
    alignItems: 'center',
    backgroundColor: colors.successMuted,
    borderRadius: 100,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  OpeningPassCardActiveDot: {
    backgroundColor: colors.success,
    borderRadius: 4,
    height: 7,
    width: 7,
  },
  OpeningPassCardActiveFiligree: {
    color: colors.success,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
  },
  OpeningPassCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '700',
  },
  OpeningPassCardDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 18,
  },
  OpeningPassCardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  OpeningPassCardDetailCell: {
    gap: 4,
    width: '46%',
  },
  OpeningPassCardDetailLabel: {
    color: colors.label,
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  OpeningPassCardDetailValue: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  OpeningPassCardDetailValueAccent: {
    color: colors.gold,
  },
});
