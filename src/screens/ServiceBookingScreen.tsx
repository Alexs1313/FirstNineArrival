import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  OutlineButton,
  PrimaryButton,
} from '../components/buttons/PrimaryButton';
import {
  PriorityToggle,
  ServiceFormField,
} from '../components/services/ServiceCards';

import {ServiceInfoCard} from '../components/services/RequestDetailCard';
import {getVenueServiceById} from '../data/services';
import {useServices} from '../context/ServicesContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

type ServiceBookingScreenProps = {
  serviceId: string;
  editRequestId?: string;
};

export function ServiceBookingScreen({
  serviceId,
  editRequestId,
}: ServiceBookingScreenProps) {
  const insets = useSafeAreaInsets();
  const {goBack, closeOverlay, openServiceRequestSent} = useAppNavigation();
  const {getRequestById, submitVenueRequest, updateVenueRequest} =
    useServices();
  const service = getVenueServiceById(serviceId);
  const existingRequest = editRequestId
    ? getRequestById(editRequestId)
    : undefined;

  const initial = useMemo(() => {
    if (existingRequest?.kind === 'venue') {
      return {
        date: existingRequest.date,
        time: existingRequest.time,
        guestCount: existingRequest.guestCount,
        contactName: existingRequest.contactName,
        preferredZone: existingRequest.preferredZone,
        notes: existingRequest.notes,
        priority: existingRequest.priority,
      };
    }
    return {
      date: '',
      time: '',
      guestCount: '',
      contactName: '',
      preferredZone: '',
      notes: '',
      priority: 'standard' as const,
    };
  }, [existingRequest]);

  const [date, setDate] = useState(initial.date);
  const [time, setTime] = useState(initial.time);

  const [guestCountToDisplay, setGuestCountToDisplay] = useState(
    initial.guestCount,
  );
  const [contactName, setContactName] = useState(initial.contactName);
  const [preferredZone, setPreferredZone] = useState(initial.preferredZone);
  const [notes, setNotes] = useState(initial.notes);
  const [priority, setPriority] = useState<'standard' | 'urgent'>(
    initial.priority,
  );

  if (!service) {
    return null;
  }

  const handleSubmit = () => {
    const input = {
      date,
      time,
      guestCount: guestCountToDisplay,
      contactName,
      preferredZone,
      notes,
      priority,
    };

    if (editRequestId) {
      updateVenueRequest(editRequestId, input);
    } else {
      submitVenueRequest(serviceId, input);
    }
    openServiceRequestSent();
  };

  return (
    <View style={styles.ServiceBookingScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.ServiceBookingScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.ServiceBookingScreenHeaderWrap}>
          <View
            style={[
              styles.ServiceBookingScreenHeaderInset,
              {paddingTop: insets.top + 8},
            ]}>
            <Pressable
              onPress={goBack}
              style={({pressed}) => [
                styles.ServiceBookingScreenBackPortico,
                pressed && styles.ServiceBookingScreenBackPressedDim,
              ]}>
              <Text style={styles.ServiceBookingScreenBackFiligree}>
                ‹ Back
              </Text>
            </Pressable>
            <Text style={styles.ServiceBookingScreenTitleFiligree}>
              {service.title}
            </Text>
            <Text style={styles.ServiceBookingScreenSubtitleFiligree}>
              Service booking form
            </Text>
          </View>
        </View>

        <ServiceInfoCard serviceId={serviceId} />

        <ServiceFormField
          label="DATE"
          value={date}
          onChangeText={setDate}
          placeholder="e.g. June 16, 2026"
        />
        <ServiceFormField
          label="TIME"
          value={time}
          onChangeText={setTime}
          placeholder="e.g. 8:00 PM"
        />
        <ServiceFormField
          label="NUMBER OF GUESTS"
          value={guestCountToDisplay}
          onChangeText={setGuestCountToDisplay}
          placeholder="e.g. 2"
        />
        <ServiceFormField
          label="CONTACT NAME"
          value={contactName}
          onChangeText={setContactName}
          placeholder="Your name..."
        />
        <ServiceFormField
          label="PREFERRED ZONE"
          value={preferredZone}
          onChangeText={setPreferredZone}
          placeholder="e.g. Main Lounge, Dining Room..."
        />
        <ServiceFormField
          label="NOTES"
          value={notes}
          onChangeText={setNotes}
          placeholder="Any additional requests or information..."
          multiline
        />

        <View style={styles.ServiceBookingScreenPriorityCard}>
          <Text style={styles.ServiceBookingScreenPriorityLabel}>PRIORITY</Text>
          <PriorityToggle value={priority} onChange={setPriority} />
        </View>

        <PrimaryButton
          label="Send Service Request"
          onPress={handleSubmit}
          fullWidth
          compact
          icon="🔔"
        />
        <OutlineButton
          label="Cancel"
          onPress={closeOverlay}
          fullWidth
          compact
          tone="gold"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceBookingScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ServiceBookingScreenScrollContent: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
  },
  ServiceBookingScreenHeaderWrap: {
    alignSelf: 'stretch',
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    marginHorizontal: -layout.screenPadding,
  },

  ServiceBookingScreenHeaderInset: {
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  ServiceBookingScreenBackPortico: {
    marginBottom: 8,
  },

  ServiceBookingScreenBackPressedDim: {
    opacity: 0.7,
  },
  ServiceBookingScreenBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  ServiceBookingScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 20,
    fontWeight: '800',
  },
  ServiceBookingScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    marginTop: 2,
  },

  ServiceBookingScreenPriorityCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    padding: 16,
  },
  ServiceBookingScreenPriorityLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
  },
});
