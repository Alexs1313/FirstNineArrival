import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {getOfferById} from '../data/offers';
import {useOffers} from '../context/OffersContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

export function OfferRequestSentScreen() {
  const insets = useSafeAreaInsets();
  const {closeOverlay, openSavedOffers} = useAppNavigation();
  const {lastRequestedOfferId} = useOffers();
  const offer = lastRequestedOfferId
    ? getOfferById(lastRequestedOfferId)
    : undefined;

  if (!offer) {
    return null;
  }

  return (
    <View style={styles.OfferRequestSentScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OfferRequestSentScreenScrollContent,
          {
            paddingTop: insets.top + 48,
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.OfferRequestSentScreenIconEnclave}>
          <Text style={styles.OfferRequestSentScreenIconSigil}>
            {offer.icon}
          </Text>
        </View>

        <Text style={styles.OfferRequestSentScreenTitleFiligree}>
          Offer Request Sent
        </Text>
        <Text style={styles.OfferRequestSentScreenSubtitleFiligree}>
          Your offer request has been prepared for confirmation.
        </Text>

        <View style={styles.OfferRequestSentScreenSummaryCard}>
          <View style={styles.OfferRequestSentScreenSummaryTopRow}>
            <Text style={styles.OfferRequestSentScreenSummaryIconSigil}>
              {offer.icon}
            </Text>
            <Text style={styles.OfferRequestSentScreenSummaryTitleFiligree}>
              {offer.title}
            </Text>
          </View>

          <View style={styles.OfferRequestSentScreenSummaryDivider} />

          <View style={styles.OfferRequestSentScreenSummaryRow}>
            <Text style={styles.OfferRequestSentScreenSummaryLabel}>
              Validity
            </Text>
            <Text style={styles.OfferRequestSentScreenSummaryValueGold}>
              {offer.validity}
            </Text>
          </View>

          <View style={styles.OfferRequestSentScreenSummaryDivider} />

          <View style={styles.OfferRequestSentScreenSummaryRow}>
            <Text style={styles.OfferRequestSentScreenSummaryLabel}>
              Status
            </Text>
            <View style={styles.OfferRequestSentScreenStatusBadge}>
              <Text style={styles.OfferRequestSentScreenStatusFiligree}>
                Pending Confirmation
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.OfferRequestSentScreenActionsLintel}>
          <PrimaryButton
            label="Back to Offers"
            onPress={closeOverlay}
            fullWidth
            compact
          />
          <OutlineButton
            label="View Saved Offers"
            onPress={openSavedOffers}
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
  OfferRequestSentScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OfferRequestSentScreenScrollContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  OfferRequestSentScreenIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(196, 145, 44, 0.09)',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 20,
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },

  OfferRequestSentScreenIconSigil: {
    fontSize: 36,
  },
  OfferRequestSentScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  OfferRequestSentScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
    textAlign: 'center',
  },
  OfferRequestSentScreenSummaryCard: {
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 28,
    padding: 17,
  },
  OfferRequestSentScreenSummaryTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  OfferRequestSentScreenSummaryIconSigil: {
    fontSize: 18,
  },
  OfferRequestSentScreenSummaryTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
  },

  OfferRequestSentScreenSummaryDivider: {
    backgroundColor: colors.borderMuted,
    height: 1,
    marginVertical: 12,
  },
  OfferRequestSentScreenSummaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OfferRequestSentScreenSummaryLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  OfferRequestSentScreenSummaryValueGold: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  OfferRequestSentScreenStatusBadge: {
    backgroundColor: 'rgba(196, 145, 44, 0.15)',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  OfferRequestSentScreenStatusFiligree: {
    color: '#e8a040',
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  OfferRequestSentScreenActionsLintel: {
    alignSelf: 'stretch',
    gap: 10,
  },
});
