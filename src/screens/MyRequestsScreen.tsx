import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {MenuScreenHeader} from '../components/menu/MenuScreenHeader';
import {ServiceTagBadge} from '../components/services/ServiceBadges';
import {
  getRequestStatusColors,
  getRequestStatusLabel,
  getRequestTag,
  getRequestTitle,
  useServices,
} from '../context/ServicesContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function MyRequestsScreen() {
  const insets = useSafeAreaInsets();
  const {openRequestDetail} = useAppNavigation();
  const {requests} = useServices();

  return (
    <View style={styles.MyRequestsScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.MyRequestsScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.MyRequestsScreenHeaderWrap}>
          <MenuScreenHeader
            title="My Requests"
            subtitle="Service & taxi requests"
            showBack
          />
        </View>

        <View style={styles.MyRequestsScreenListLintel}>
          {requests.map(request => {
            const statusColors = getRequestStatusColors(request.status);
            const tag = getRequestTag(request);

            return (
              <View key={request.id} style={styles.MyRequestsScreenRequestCard}>
                <View style={styles.MyRequestsScreenRequestTopRow}>
                  <Text style={styles.MyRequestsScreenRequestTitleFiligree}>
                    {getRequestTitle(request)}
                  </Text>
                  <View
                    style={[
                      styles.MyRequestsScreenStatusBadge,
                      {backgroundColor: statusColors.background},
                    ]}>
                    <Text
                      style={[
                        styles.MyRequestsScreenStatusFiligree,
                        {color: statusColors.color},
                      ]}>
                      {getRequestStatusLabel(request.status)}
                    </Text>
                  </View>
                </View>

                <View style={styles.MyRequestsScreenMetaRow}>
                  <View style={styles.MyRequestsScreenMetaLeft}>
                    <ServiceTagBadge tag={tag} />
                    <Text style={styles.MyRequestsScreenMetaFiligree}>
                      {request.submittedLabel}
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={() => openRequestDetail(request.id)}
                  style={({pressed}) => [
                    styles.MyRequestsScreenViewButton,
                    pressed && styles.MyRequestsScreenViewButtonPressedDim,
                  ]}>
                  <Text style={styles.MyRequestsScreenViewButtonFiligree}>
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
  MyRequestsScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  MyRequestsScreenScrollContent: {
    paddingHorizontal: layout.screenPadding,
  },
  MyRequestsScreenHeaderWrap: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    marginHorizontal: -layout.screenPadding,
  },
  MyRequestsScreenListLintel: {
    gap: 10,
    paddingTop: 16,
  },
  MyRequestsScreenRequestCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    padding: 16,
  },
  MyRequestsScreenRequestTopRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  MyRequestsScreenRequestTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
  },
  MyRequestsScreenStatusBadge: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  MyRequestsScreenStatusFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.4,
  },

  MyRequestsScreenMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MyRequestsScreenMetaLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  MyRequestsScreenMetaFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  MyRequestsScreenViewButton: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 10,
    borderWidth: 1,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
  },
  MyRequestsScreenViewButtonPressedDim: {
    opacity: 0.85,
  },
  MyRequestsScreenViewButtonFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
});
