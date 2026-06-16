import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OfferListCard} from '../components/offers/OfferCards';
import {OffersListSavedChip} from '../components/offers/OfferScreenHeader';
import {AFTER_OPENING_OFFERS} from '../data/offers';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function OffersScreen() {
  const insets = useSafeAreaInsets();
  const {openOfferDetail, openSavedOffers} = useAppNavigation();

  return (
    <View style={styles.OffersScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OffersScreenScrollContent,
          {paddingBottom: insets.bottom + layout.screenPadding},
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#131228', colors.surface]}
          style={styles.OffersScreenHeaderGradient}>
          <View
            style={[
              styles.OffersScreenHeaderInset,
              {paddingTop: insets.top + 16},
            ]}>
            <View style={styles.OffersScreenHeaderRowLintel}>
              <View style={styles.OffersScreenHeaderTextEnclave}>
                <Text style={styles.OffersScreenEyebrowFiligree}>
                  FOR OPENING GUESTS
                </Text>
                <Text style={styles.OffersScreenTitleFiligree}>
                  After Opening Offers
                </Text>
                <Text style={styles.OffersScreenSubtitleFiligree}>
                  Discover what comes after the first arrival.
                </Text>
              </View>
              <OffersListSavedChip onPress={openSavedOffers} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.OffersScreenListLintel}>
          {AFTER_OPENING_OFFERS.map(offer => (
            <OfferListCard
              key={offer.id}
              offer={offer}
              onPress={() => openOfferDetail(offer.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OffersScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OffersScreenScrollContent: {
    gap: 0,
  },
  OffersScreenHeaderGradient: {},
  OffersScreenHeaderInset: {
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  OffersScreenHeaderRowLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  OffersScreenHeaderTextEnclave: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },

  OffersScreenEyebrowFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1.12,
    textTransform: 'uppercase',
  },
  OffersScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.07,
    lineHeight: 29,
  },
  OffersScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 19.5,
    marginTop: 3,
  },
  OffersScreenListLintel: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
    paddingTop: 4,
  },
});
