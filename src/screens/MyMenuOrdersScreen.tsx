import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {MenuScreenHeader} from '../components/menu/MenuScreenHeader';
import {
  getOrderStatusColors,
  getOrderStatusLabel,
  useMenu,
} from '../context/MenuContext';
import {formatEuro} from '../data/menu';
import {colors, fonts, layout} from '../constants/theme';

export function MyMenuOrdersScreen() {
  const insets = useSafeAreaInsets();
  const {orders} = useMenu();

  return (
    <View style={styles.MyMenuOrdersScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.MyMenuOrdersScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.MyMenuOrdersScreenHeaderWrap}>
          <MenuScreenHeader
            title="My Menu Orders"
            subtitle="Opening night order history"
            showBack
          />
        </View>

        <View style={styles.MyMenuOrdersScreenListLintel}>
          {orders.map(order => {
            const statusColors = getOrderStatusColors(order.status);

            return (
              <View key={order.id} style={styles.MyMenuOrdersScreenOrderCard}>
                <View style={styles.MyMenuOrdersScreenOrderTopRow}>
                  <Text style={styles.MyMenuOrdersScreenOrderTitleFiligree}>
                    {order.title}
                  </Text>
                  <View
                    style={[
                      styles.MyMenuOrdersScreenStatusBadge,
                      {backgroundColor: statusColors.background},
                    ]}>
                    <Text
                      style={[
                        styles.MyMenuOrdersScreenStatusFiligree,
                        {color: statusColors.color},
                      ]}>
                      {getOrderStatusLabel(order.status)}
                    </Text>
                  </View>
                </View>

                <View style={styles.MyMenuOrdersScreenOrderMetaRow}>
                  <Text style={styles.MyMenuOrdersScreenOrderDateFiligree}>
                    {order.submittedLabel}
                  </Text>
                  <Text style={styles.MyMenuOrdersScreenOrderTotalFiligree}>
                    {formatEuro(order.total)}
                  </Text>
                </View>

                <Pressable
                  style={({pressed}) => [
                    styles.MyMenuOrdersScreenViewButton,
                    pressed && styles.MyMenuOrdersScreenViewButtonPressedDim,
                  ]}>
                  <Text style={styles.MyMenuOrdersScreenViewButtonFiligree}>
                    View Details
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MyMenuOrdersScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  MyMenuOrdersScreenScrollContent: {
    paddingHorizontal: layout.screenPadding,
  },
  MyMenuOrdersScreenHeaderWrap: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    marginHorizontal: -layout.screenPadding,
  },
  MyMenuOrdersScreenListLintel: {
    gap: 10,
    paddingTop: 16,
  },

  MyMenuOrdersScreenOrderCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    padding: 16,
  },

  MyMenuOrdersScreenOrderTopRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  MyMenuOrdersScreenOrderTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
  },
  MyMenuOrdersScreenStatusBadge: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  MyMenuOrdersScreenStatusFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  MyMenuOrdersScreenOrderMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  MyMenuOrdersScreenOrderDateFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  MyMenuOrdersScreenOrderTotalFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansBold,
    fontSize: 14,
    fontWeight: '700',
  },

  MyMenuOrdersScreenViewButton: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 10,
    borderWidth: 1,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
  },
  MyMenuOrdersScreenViewButtonPressedDim: {
    opacity: 0.85,
  },
  MyMenuOrdersScreenViewButtonFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
});
