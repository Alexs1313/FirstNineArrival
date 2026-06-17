import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {MenuListCard} from '../components/menu/MenuCards';
import {MenuScreenHeader} from '../components/menu/MenuScreenHeader';
import {APP_BRAND_LINE} from '../constants/brand';
import {OPENING_MENU} from '../data/menu';
import {useMenu} from '../context/MenuContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, layout} from '../constants/theme';

export function MenuScreen() {
  const insets = useSafeAreaInsets();
  const {openMenuItem, openYourOrder} = useAppNavigation();
  const {cartItemCount} = useMenu();

  return (
    <View style={styles.MenuScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.MenuScreenScrollContent,
          {paddingBottom: insets.bottom + layout.screenPadding},
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#131228', colors.surface]}>
          <MenuScreenHeader
            eyebrow={APP_BRAND_LINE}
            title="Opening Menu"
            subtitle="Browse items, add to order, and send your request."
            cartCount={cartItemCount}
            onCartPress={openYourOrder}
          />
        </LinearGradient>

        <View style={styles.MenuScreenListLintel}>
          {OPENING_MENU.map(item => (
            <MenuListCard
              key={item.id}
              item={item}
              onPress={() => openMenuItem(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  MenuScreenScrollContent: {
    gap: 0,
  },

  MenuScreenListLintel: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
    paddingTop: 4,
  },
});
