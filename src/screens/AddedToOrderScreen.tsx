import React, {useEffect} from 'react';
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

type AddedToOrderScreenProps = {
  itemId: string;
  quantity: number;
};

export function AddedToOrderScreen({
  itemId,
  quantity,
}: AddedToOrderScreenProps) {
  const insets = useSafeAreaInsets();
  const {closeOverlay, openYourOrder} = useAppNavigation();
  const {addToCart} = useMenu();
  const item = getMenuItemById(itemId);

  useEffect(() => {
    addToCart(itemId, quantity);
  }, [addToCart, itemId, quantity]);

  if (!item) {
    return null;
  }

  const lineTotal = item.price * quantity;

  return (
    <View style={styles.AddedToOrderScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.AddedToOrderScreenScrollContent,
          {
            paddingTop: insets.top + 48,
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.AddedToOrderScreenIconEnclave}>
          <Text style={styles.AddedToOrderScreenIconSigil}>✓</Text>
        </View>

        <Text style={styles.AddedToOrderScreenTitleFiligree}>
          Added to Order
        </Text>
        <Text style={styles.AddedToOrderScreenItemFiligree}>{item.title}</Text>
        <Text style={styles.AddedToOrderScreenMetaFiligree}>
          {formatEuro(lineTotal)} · Qty {quantity}
        </Text>

        <View style={styles.AddedToOrderScreenActionsLintel}>
          <PrimaryButton
            label="View Order"
            onPress={openYourOrder}
            fullWidth
            compact
            icon="🛍️"
          />
          <OutlineButton
            label="Continue Browsing"
            onPress={closeOverlay}
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
  AddedToOrderScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  AddedToOrderScreenScrollContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  AddedToOrderScreenIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(40, 144, 74, 0.12)',
    borderColor: 'rgba(40, 144, 74, 0.35)',
    borderRadius: 20,
    borderWidth: 1,
    height: 72,
    justifyContent: 'center',
    marginBottom: 20,
    width: 72,
  },

  AddedToOrderScreenIconSigil: {
    color: colors.status,
    fontSize: 32,
    fontWeight: '700',
  },
  AddedToOrderScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },

  AddedToOrderScreenItemFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  AddedToOrderScreenMetaFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 36,
    textAlign: 'center',
  },

  AddedToOrderScreenActionsLintel: {
    alignSelf: 'stretch',
    gap: 10,
  },
});
