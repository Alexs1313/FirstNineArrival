import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {formatEuro, getMenuItemById} from '../data/menu';
import {useMenu} from '../context/MenuContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

export function OrderSentScreen() {
  const insets = useSafeAreaInsets();
  const {closeOverlay, openMyMenuOrders} = useAppNavigation();
  const {lastSubmittedOrder} = useMenu();

  if (!lastSubmittedOrder) {
    return null;
  }

  return (
    <View style={styles.OrderSentScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OrderSentScreenScrollContent,
          {
            paddingTop: insets.top + 48,
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.OrderSentScreenIconEnclave}>
          <Text style={styles.OrderSentScreenIconSigil}>✓</Text>
        </View>

        <Text style={styles.OrderSentScreenTitleFiligree}>Order Sent</Text>
        <Text style={styles.OrderSentScreenSubtitleFiligree}>
          Your menu request has been prepared for venue confirmation.
        </Text>

        <View style={styles.OrderSentScreenSummaryCard}>
          <Text style={styles.OrderSentScreenSummaryLabel}>ORDER SUMMARY</Text>
          {lastSubmittedOrder.lines.map(line => {
            const item = getMenuItemById(line.itemId);
            if (!item) {
              return null;
            }

            return (
              <View key={line.itemId} style={styles.OrderSentScreenSummaryRow}>
                <Text style={styles.OrderSentScreenSummaryItemFiligree}>
                  {item.title} × {line.quantity}
                </Text>
                <Text style={styles.OrderSentScreenSummaryPriceFiligree}>
                  {formatEuro(item.price * line.quantity)}
                </Text>
              </View>
            );
          })}
          <View style={styles.OrderSentScreenSummaryDivider} />
          <View style={styles.OrderSentScreenSummaryRow}>
            <Text style={styles.OrderSentScreenSummaryTotalLabel}>Total</Text>
            <Text style={styles.OrderSentScreenSummaryTotalFiligree}>
              {formatEuro(lastSubmittedOrder.total)}
            </Text>
          </View>
        </View>

        <View style={styles.OrderSentScreenStatusCard}>
          <Text style={styles.OrderSentScreenStatusLabel}>Status</Text>
          <View style={styles.OrderSentScreenStatusBadge}>
            <Text style={styles.OrderSentScreenStatusFiligree}>
              Pending Confirmation
            </Text>
          </View>
        </View>

        <View style={styles.OrderSentScreenActionsLintel}>
          <PrimaryButton
            label="Back to Menu"
            onPress={closeOverlay}
            fullWidth
            compact
          />
          <OutlineButton
            label="View My Orders"
            onPress={openMyMenuOrders}
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
  OrderSentScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  OrderSentScreenScrollContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  OrderSentScreenIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(40, 144, 74, 0.12)',
    borderColor: 'rgba(40, 144, 74, 0.35)',
    borderRadius: 20,
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  OrderSentScreenIconSigil: {
    color: colors.status,
    fontSize: 36,
    fontWeight: '700',
  },
  OrderSentScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  OrderSentScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
    textAlign: 'center',
  },
  OrderSentScreenSummaryCard: {
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    marginBottom: 10,
    padding: 17,
  },
  OrderSentScreenSummaryLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
    marginBottom: 4,
  },
  OrderSentScreenSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  OrderSentScreenSummaryItemFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    paddingRight: 12,
  },
  OrderSentScreenSummaryPriceFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '600',
  },
  OrderSentScreenSummaryDivider: {
    backgroundColor: colors.borderMuted,
    height: 1,
    marginVertical: 4,
  },
  OrderSentScreenSummaryTotalLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
  },
  OrderSentScreenSummaryTotalFiligree: {
    color: colors.goldBright,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '800',
  },
  OrderSentScreenStatusCard: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    padding: 16,
  },
  OrderSentScreenStatusLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  OrderSentScreenStatusBadge: {
    backgroundColor: 'rgba(196, 145, 44, 0.15)',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  OrderSentScreenStatusFiligree: {
    color: '#e8a040',
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  OrderSentScreenActionsLintel: {
    alignSelf: 'stretch',
    gap: 10,
  },
});
