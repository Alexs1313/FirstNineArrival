import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {MenuDetailHeader} from '../components/menu/MenuScreenHeader';
import {QuantityStepper} from '../components/menu/MenuCards';
import {EventSectionCard} from '../components/events/EventCards';
import {formatEuro, getMenuItemById} from '../data/menu';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

type MenuItemDetailScreenProps = {
  itemId: string;
};

export function MenuItemDetailScreen({itemId}: MenuItemDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const {openAddedToOrder} = useAppNavigation();
  const item = getMenuItemById(itemId);
  const [orderQuantityToDisplay, setOrderQuantityToDisplay] = useState(0);

  if (!item) {
    return null;
  }

  const lineTotal = item.price * Math.max(orderQuantityToDisplay, 1);

  const handleAdd = () => {
    const nextQuantity =
      orderQuantityToDisplay > 0 ? orderQuantityToDisplay : 1;
    openAddedToOrder(itemId, nextQuantity);
  };

  return (
    <View style={styles.MenuItemDetailScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.MenuItemDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.MenuItemDetailScreenHeaderWrap}>
          <MenuDetailHeader featured={item.featured} />
        </View>

        <Image source={item.image} style={styles.MenuItemDetailScreenImage} />

        <View style={styles.MenuItemDetailScreenTitleRow}>
          <Text style={styles.MenuItemDetailScreenTitleFiligree}>
            {item.title}
          </Text>
          <Text style={styles.MenuItemDetailScreenPriceFiligree}>
            {formatEuro(item.price)}
          </Text>
        </View>

        <Text style={styles.MenuItemDetailScreenDescriptionFiligree}>
          {item.description}
        </Text>

        <EventSectionCard
          title="Ingredients & Highlights"
          body={item.ingredients}
        />
        <EventSectionCard title="Suggested Pairing" body={item.pairing} />
        <EventSectionCard title="Allergen Note" body={item.allergenNote} />

        <View style={styles.MenuItemDetailScreenQuantityCard}>
          <Text style={styles.MenuItemDetailScreenQuantityLabel}>Quantity</Text>
          <View style={styles.MenuItemDetailScreenQuantityRow}>
            <QuantityStepper
              quantity={orderQuantityToDisplay}
              onDecrease={() =>
                setOrderQuantityToDisplay(current => Math.max(0, current - 1))
              }
              onIncrease={() =>
                setOrderQuantityToDisplay(current => current + 1)
              }
            />
            <Text style={styles.MenuItemDetailScreenLineTotalFiligree}>
              {formatEuro(orderQuantityToDisplay > 0 ? lineTotal : item.price)}
            </Text>
          </View>
        </View>

        <PrimaryButton
          label={`+ Add to Order • ${formatEuro(
            orderQuantityToDisplay > 0 ? lineTotal : item.price,
          )}`}
          onPress={handleAdd}
          fullWidth
          compact
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuItemDetailScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  MenuItemDetailScreenScrollContent: {
    gap: 10,
    paddingHorizontal: 20,
  },

  MenuItemDetailScreenHeaderWrap: {
    alignSelf: 'stretch',
    marginHorizontal: -20,
  },
  MenuItemDetailScreenImage: {
    borderRadius: 16,
    height: 200,
    width: '100%',
  },
  MenuItemDetailScreenTitleRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 4,
  },

  MenuItemDetailScreenTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 26,
  },
  MenuItemDetailScreenPriceFiligree: {
    color: colors.goldBright,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '800',
  },
  MenuItemDetailScreenDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 6,
  },

  MenuItemDetailScreenQuantityCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    padding: 17,
  },

  MenuItemDetailScreenQuantityLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.12,
    textTransform: 'uppercase',
  },
  MenuItemDetailScreenQuantityRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  MenuItemDetailScreenLineTotalFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansBold,
    fontSize: 18,
    fontWeight: '700',
  },
});
