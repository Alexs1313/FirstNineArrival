import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {RequestDetailCard} from '../components/services/RequestDetailCard';
import {
  getRequestConfirmationBadge,
  getRequestStatusColors,
  useServices,
} from '../context/ServicesContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts} from '../constants/theme';

export function ServiceRequestSentScreen() {
  const insets = useSafeAreaInsets();
  const {closeOverlay, openMyRequests} = useAppNavigation();
  const {lastSubmittedRequest} = useServices();

  if (!lastSubmittedRequest) {
    return null;
  }

  const statusColors = getRequestStatusColors(lastSubmittedRequest.status);

  return (
    <View style={styles.ServiceRequestSentScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.ServiceRequestSentScreenScrollContent,
          {
            paddingTop: insets.top + 48,
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ServiceRequestSentScreenIconEnclave}>
          <Text style={styles.ServiceRequestSentScreenIconSigil}>✓</Text>
        </View>

        <Text style={styles.ServiceRequestSentScreenTitleFiligree}>
          Request Sent
        </Text>
        <Text style={styles.ServiceRequestSentScreenSubtitleFiligree}>
          Your request has been prepared for venue confirmation.
        </Text>

        <View style={styles.ServiceRequestSentScreenCardWrap}>
          <RequestDetailCard request={lastSubmittedRequest} />
        </View>

        <View style={styles.ServiceRequestSentScreenStatusCard}>
          <Text style={styles.ServiceRequestSentScreenStatusLabel}>Status</Text>
          <View
            style={[
              styles.ServiceRequestSentScreenStatusBadge,
              {backgroundColor: statusColors.background},
            ]}>
            <Text
              style={[
                styles.ServiceRequestSentScreenStatusFiligree,
                {color: statusColors.color},
              ]}>
              {getRequestConfirmationBadge(lastSubmittedRequest.status)}
            </Text>
          </View>
        </View>

        <View style={styles.ServiceRequestSentScreenActionsLintel}>
          <PrimaryButton
            label="Back to Services"
            onPress={closeOverlay}
            fullWidth
            compact
          />
          <OutlineButton
            label="View My Requests"
            onPress={openMyRequests}
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
  ServiceRequestSentScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ServiceRequestSentScreenScrollContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  ServiceRequestSentScreenIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(40, 144, 74, 0.12)',
    borderColor: 'rgba(40, 144, 74, 0.35)',
    borderRadius: 20,
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  ServiceRequestSentScreenIconSigil: {
    color: colors.status,
    fontSize: 36,
    fontWeight: '700',
  },

  ServiceRequestSentScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  ServiceRequestSentScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
    textAlign: 'center',
  },

  ServiceRequestSentScreenCardWrap: {
    alignSelf: 'stretch',
  },
  ServiceRequestSentScreenStatusCard: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    marginTop: 10,
    padding: 16,
  },
  ServiceRequestSentScreenStatusLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  ServiceRequestSentScreenStatusBadge: {
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  ServiceRequestSentScreenStatusFiligree: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  ServiceRequestSentScreenActionsLintel: {
    alignSelf: 'stretch',
    gap: 10,
  },
});
