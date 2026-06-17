import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OfferHeroCard, OfferSectionCard} from '../components/offers/OfferCards';
import {OfferDetailHeader} from '../components/offers/OfferScreenHeader';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {getOfferById} from '../data/offers';
import {useOffers} from '../context/OffersContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors} from '../constants/theme';

type OfferDetailScreenProps = {
  offerId: string;
};

export function OfferDetailScreen({offerId}: OfferDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const {openOfferRequestSent} = useAppNavigation();
  const {isOfferSaved, toggleSaved, requestOffer} = useOffers();
  const offer = getOfferById(offerId);

  if (!offer) {
    return null;
  }

  const saved = isOfferSaved(offerId);

  const handleRequest = () => {
    requestOffer(offerId);
    openOfferRequestSent();
  };
  return (
    <View style={styles.OfferDetailScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OfferDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.OfferDetailScreenHeaderWrap}>
          <OfferDetailHeader
            savedActive={saved}
            onSavedPress={() => toggleSaved(offerId)}
          />
        </View>

        <OfferHeroCard offer={offer} />

        <OfferSectionCard title="What is Included" body={offer.included} />
        <OfferSectionCard title="How to Request" body={offer.howToRequest} />
        <OfferSectionCard title="Terms & Conditions" body={offer.terms} />

        <PrimaryButton
          label="Request This Offer"
          onPress={handleRequest}
          fullWidth
          compact
          icon="🎁"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OfferDetailScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OfferDetailScreenScrollContent: {
    gap: 10,
    paddingHorizontal: 20,
  },

  OfferDetailScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -20,
  },
});
