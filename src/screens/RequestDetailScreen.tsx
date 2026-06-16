import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OutlineButton} from '../components/buttons/PrimaryButton';
import {RequestDetailCard} from '../components/services/RequestDetailCard';
import {useServices} from '../context/ServicesContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

type RequestDetailScreenProps = {
  requestId: string;
};

export function RequestDetailScreen({requestId}: RequestDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const {goBack, openServiceBooking} = useAppNavigation();
  const {getRequestById, cancelRequest} = useServices();
  const request = getRequestById(requestId);

  if (!request) {
    return null;
  }

  const handleEdit = () => {
    if (request.kind === 'venue') {
      openServiceBooking(request.serviceId, requestId);
    }
  };

  const handleCancel = () => {
    cancelRequest(requestId);
    goBack();
  };

  return (
    <View style={styles.RequestDetailScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.RequestDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.RequestDetailScreenHeaderWrap}>
          <View
            style={[
              styles.RequestDetailScreenHeaderInset,
              {paddingTop: insets.top + 8},
            ]}>
            <Pressable
              onPress={goBack}
              style={({pressed}) => [
                styles.RequestDetailScreenBackPortico,
                pressed && styles.RequestDetailScreenBackPressedDim,
              ]}>
              <Text style={styles.RequestDetailScreenBackFiligree}>‹ Back</Text>
            </Pressable>
            <Text style={styles.RequestDetailScreenTitleFiligree}>
              Request Details
            </Text>
          </View>
        </View>

        <RequestDetailCard request={request} />

        {request.kind === 'venue' ? (
          <OutlineButton
            label="Edit Request"
            onPress={handleEdit}
            fullWidth
            compact
            tone="gold"
          />
        ) : null}

        <Pressable
          onPress={handleCancel}
          style={({pressed}) => [
            styles.RequestDetailScreenCancelButton,
            pressed && styles.RequestDetailScreenCancelButtonPressedDim,
          ]}>
          <Text style={styles.RequestDetailScreenCancelFiligree}>
            Cancel Request
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  RequestDetailScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  RequestDetailScreenScrollContent: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
  },

  RequestDetailScreenHeaderWrap: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    marginHorizontal: -layout.screenPadding,
  },
  RequestDetailScreenHeaderInset: {
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  RequestDetailScreenBackPortico: {
    marginBottom: 8,
  },
  RequestDetailScreenBackPressedDim: {
    opacity: 0.7,
  },
  RequestDetailScreenBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },

  RequestDetailScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  RequestDetailScreenCancelButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(180, 60, 60, 0.12)',
    borderColor: 'rgba(180, 60, 60, 0.35)',
    borderRadius: 12,
    borderWidth: 1,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
    marginTop: 4,
  },
  RequestDetailScreenCancelButtonPressedDim: {
    opacity: 0.85,
  },
  RequestDetailScreenCancelFiligree: {
    color: '#e06060',
    fontFamily: fonts.sansSemiBold,
    fontSize: 15,
    fontWeight: '600',
  },
});
