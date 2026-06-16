import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SubScreenHeader} from '../components/nav/SubScreenHeader';
import {ENTRY_RULES} from '../data/entryRules';
import {colors, fonts} from '../constants/theme';

export function EntryRulesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.EntryRulesScreenFacetChassis}>
      <SubScreenHeader title="Entry Rules" />

      <ScrollView
        contentContainerStyle={[
          styles.EntryRulesScreenScrollContent,
          {paddingBottom: insets.bottom + 20},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.EntryRulesScreenIntroCard}>
          <View style={styles.EntryRulesScreenIntroIconEnclave}>
            <Text style={styles.EntryRulesScreenIntroIconSigil}>🛡️</Text>
          </View>
          <View style={styles.EntryRulesScreenIntroTextEnclave}>
            <Text style={styles.EntryRulesScreenIntroTitleFiligree}>
              Opening Night
            </Text>
            <Text style={styles.EntryRulesScreenIntroSubtitleFiligree}>
              Guest entry guidelines
            </Text>
          </View>
        </View>

        {ENTRY_RULES.map(rule => (
          <View key={rule.id} style={styles.EntryRulesScreenRuleCard}>
            <Text style={styles.EntryRulesScreenRuleEmojiSigil}>
              {rule.emoji}
            </Text>
            <Text style={styles.EntryRulesScreenRuleFiligree}>{rule.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EntryRulesScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  EntryRulesScreenScrollContent: {
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  EntryRulesScreenIntroCard: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 6,
    padding: 16,
  },
  EntryRulesScreenIntroIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(221, 184, 74, 0.12)',
    borderColor: colors.goldBorder,
    borderRadius: 12,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  EntryRulesScreenIntroIconSigil: {
    fontSize: 22,
  },

  EntryRulesScreenIntroTextEnclave: {
    flex: 1,
    gap: 2,
  },
  EntryRulesScreenIntroTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '700',
  },
  EntryRulesScreenIntroSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  EntryRulesScreenRuleCard: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    padding: 16,
  },
  EntryRulesScreenRuleEmojiSigil: {
    fontSize: 22,
  },
  EntryRulesScreenRuleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 20,
  },
});
