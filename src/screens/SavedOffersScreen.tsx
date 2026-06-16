import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OfferListCard} from '../components/offers/OfferCards';
import {SavedOffersHeader} from '../components/offers/OfferScreenHeader';
import {AFTER_OPENING_OFFERS} from '../data/offers';
import {useOffers} from '../context/OffersContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

export function SavedOffersScreen() {
  const insets = useSafeAreaInsets();
  const {openOfferDetail} = useAppNavigation();
  const {savedOfferIds, savedCount} = useOffers();
  const savedOffers = AFTER_OPENING_OFFERS.filter(offer =>
    savedOfferIds.includes(offer.id),
  );

  return (
    <View style={styles.SavedOffersScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.SavedOffersScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.SavedOffersScreenHeaderWrap}>
          <SavedOffersHeader count={savedCount} />
        </View>

        {savedCount === 0 ? (
          <View style={styles.SavedOffersScreenEmptyEnclave}>
            <Text style={styles.SavedOffersScreenEmptyIconSigil}>🎁</Text>
            <Text style={styles.SavedOffersScreenEmptyTitleFiligree}>
              No saved offers yet
            </Text>
            <Text style={styles.SavedOffersScreenEmptyBodyFiligree}>
              Tap "Save Offer" on any offer to add it here.
            </Text>
          </View>
        ) : (
          <View style={styles.SavedOffersScreenListLintel}>
            {savedOffers.map(offer => (
              <OfferListCard
                key={offer.id}
                offer={offer}
                onPress={() => openOfferDetail(offer.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SavedOffersScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  SavedOffersScreenScrollContent: {
    paddingHorizontal: 20,
  },
  SavedOffersScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -20,
  },
  SavedOffersScreenEmptyEnclave: {
    alignItems: 'center',
    paddingTop: 60,
  },
  SavedOffersScreenEmptyIconSigil: {
    fontSize: 40,
    marginBottom: 16,
    opacity: 0.45,
  },
  SavedOffersScreenEmptyTitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 16,
    letterSpacing: -0.31,
    marginBottom: 6,
    textAlign: 'center',
  },
  SavedOffersScreenEmptyBodyFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    textAlign: 'center',
  },
  SavedOffersScreenListLintel: {
    gap: 10,
    paddingTop: 16,
  },
});
