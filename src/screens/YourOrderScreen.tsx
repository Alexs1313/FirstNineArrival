import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {QuantityStepper} from '../components/menu/MenuCards';
import {MenuScreenHeader} from '../components/menu/MenuScreenHeader';
import {formatEuro, getMenuItemById} from '../data/menu';
import {useMenu} from '../context/MenuContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function YourOrderScreen() {
  const insets = useSafeAreaInsets();
  const {openMyMenuOrders, openOrderSent} = useAppNavigation();
  const {
    cart,
    cartItemCount,
    cartTotal,
    setCartQuantity,
    removeFromCart,
    submitOrder,
  } = useMenu();
  const [preferredTime, setPreferredTime] = useState('');
  const [guestName, setGuestName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (cart.length === 0) {
      return;
    }
    submitOrder({preferredTime, guestName, notes});
    openOrderSent();
  };

  return (
    <View style={styles.YourOrderScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.YourOrderScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.YourOrderScreenHeaderWrap}>
          <MenuScreenHeader
            title="Your Order"
            subtitle={`${cartItemCount} items selected`}
            showBack
            rightAction={
              <Pressable
                onPress={openMyMenuOrders}
                style={({pressed}) => [
                  styles.YourOrderScreenOrdersChip,
                  pressed && styles.YourOrderScreenOrdersChipPressedDim,
                ]}>
                <Text style={styles.YourOrderScreenOrdersChipFiligree}>
                  My Menu Orders
                </Text>
              </Pressable>
            }
          />
        </View>

        <View style={styles.YourOrderScreenListLintel}>
          {cart.map(line => {
            const item = getMenuItemById(line.itemId);
            if (!item) {
              return null;
            }

            return (
              <View key={line.itemId} style={styles.YourOrderScreenItemCard}>
                <View style={styles.YourOrderScreenItemTopRow}>
                  <View style={styles.YourOrderScreenItemIconEnclave}>
                    <Text style={styles.YourOrderScreenItemIconSigil}>🍽️</Text>
                  </View>
                  <View style={styles.YourOrderScreenItemTextEnclave}>
                    <Text style={styles.YourOrderScreenItemTitleFiligree}>
                      {item.title}
                    </Text>
                    <Text style={styles.YourOrderScreenItemPriceFiligree}>
                      {formatEuro(item.price)} each
                    </Text>
                  </View>
                  <Pressable onPress={() => removeFromCart(line.itemId)}>
                    <Text style={styles.YourOrderScreenRemoveSigil}>🗑️</Text>
                  </Pressable>
                </View>

                <View style={styles.YourOrderScreenItemBottomRow}>
                  <QuantityStepper
                    quantity={line.quantity}
                    onDecrease={() =>
                      setCartQuantity(line.itemId, line.quantity - 1)
                    }
                    onIncrease={() =>
                      setCartQuantity(line.itemId, line.quantity + 1)
                    }
                  />
                  <Text style={styles.YourOrderScreenItemTotalFiligree}>
                    {formatEuro(item.price * line.quantity)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.YourOrderScreenFieldCard}>
          <Text style={styles.YourOrderScreenFieldLabel}>
            PREFERRED SERVICE TIME
          </Text>
          <TextInput
            value={preferredTime}
            onChangeText={setPreferredTime}
            placeholder="e.g. 8:00 PM"
            placeholderTextColor={colors.label}
            style={styles.YourOrderScreenFieldInput}
          />
        </View>

        <View style={styles.YourOrderScreenFieldCard}>
          <Text style={styles.YourOrderScreenFieldLabel}>GUEST NAME</Text>
          <TextInput
            value={guestName}
            onChangeText={setGuestName}
            placeholder="Your name..."
            placeholderTextColor={colors.label}
            style={styles.YourOrderScreenFieldInput}
          />
        </View>

        <View style={styles.YourOrderScreenFieldCard}>
          <Text style={styles.YourOrderScreenFieldLabel}>NOTES</Text>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Any special requests or dietary notes..."
            placeholderTextColor={colors.label}
            multiline
            style={[
              styles.YourOrderScreenFieldInput,
              styles.YourOrderScreenFieldInputMultiline,
            ]}
          />
        </View>

        <View style={styles.YourOrderScreenTotalCard}>
          <View>
            <Text style={styles.YourOrderScreenTotalLabel}>Order Total</Text>
            <Text style={styles.YourOrderScreenTotalMeta}>
              {cartItemCount} items
            </Text>
          </View>
          <Text style={styles.YourOrderScreenTotalFiligree}>
            {formatEuro(cartTotal)}
          </Text>
        </View>

        <PrimaryButton
          label="Submit Menu Order"
          onPress={handleSubmit}
          fullWidth
          compact
          icon="📋"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  YourOrderScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  YourOrderScreenScrollContent: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
  },

  YourOrderScreenHeaderWrap: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    marginHorizontal: -layout.screenPadding,
  },
  YourOrderScreenOrdersChip: {
    borderColor: 'rgba(196, 145, 44, 0.53)',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  YourOrderScreenOrdersChipPressedDim: {
    opacity: 0.85,
  },
  YourOrderScreenOrdersChipFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
  },
  YourOrderScreenListLintel: {
    gap: 10,
    marginTop: 8,
  },
  YourOrderScreenItemCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 14,
    padding: 16,
  },
  YourOrderScreenItemTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },

  YourOrderScreenItemIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(196, 145, 44, 0.1)',
    borderColor: 'rgba(196, 145, 44, 0.25)',
    borderRadius: 12,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  YourOrderScreenItemIconSigil: {
    fontSize: 20,
  },

  YourOrderScreenItemTextEnclave: {
    flex: 1,
    gap: 2,
  },
  YourOrderScreenItemTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
  },
  YourOrderScreenItemPriceFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  YourOrderScreenRemoveSigil: {
    fontSize: 18,
  },
  YourOrderScreenItemBottomRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  YourOrderScreenItemTotalFiligree: {
    color: colors.goldBright,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },
  YourOrderScreenFieldCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 16,
  },
  YourOrderScreenFieldLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
  },
  YourOrderScreenFieldInput: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    padding: 0,
  },
  YourOrderScreenFieldInputMultiline: {
    minHeight: 56,
    textAlignVertical: 'top',
  },
  YourOrderScreenTotalCard: {
    alignItems: 'center',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    padding: 16,
  },
  YourOrderScreenTotalLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  YourOrderScreenTotalMeta: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    marginTop: 2,
  },
  YourOrderScreenTotalFiligree: {
    color: colors.goldBright,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
  },
});
