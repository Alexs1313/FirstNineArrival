import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ServiceFormField,
  ServiceListCard,
  ServicesTabSwitcher,
  TaxiQuickOptionCard,
  VehiclePreferenceChips,
} from '../components/services/ServiceCards';
import {MyRequestsChipButton} from '../components/services/ServiceBadges';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {
  TAXI_QUICK_OPTIONS,
  VEHICLE_OPTIONS,
  VENUE_SERVICES,
  type VehicleOption,
} from '../data/services';
import {useServices} from '../context/ServicesContext';
import {useAppNavigation} from '../navigation/NavigationContext';
import {colors, fonts, layout} from '../constants/theme';

export function ServicesScreen() {
  const insets = useSafeAreaInsets();
  const {openServiceBooking, openMyRequests, openServiceRequestSent} =
    useAppNavigation();
  const {submitTaxiRequest} = useServices();
  const [activeTab, setActiveTab] = useState<'venue' | 'taxi'>('venue');
  const [selectedQuickOption, setSelectedQuickOption] = useState<string>();
  const [pickupTime, setPickupTime] = useState('');
  const [passengers, setPassengers] = useState('');
  const [destination, setDestination] = useState('');
  const [vehiclePreference, setVehiclePreference] =
    useState<VehicleOption>('Standard');
  const [driverNotes, setDriverNotes] = useState('');

  const handleTaxiSubmit = () => {
    submitTaxiRequest({
      pickupTime,
      passengers,
      destination,
      vehiclePreference,
      driverNotes,
      quickOptionId: selectedQuickOption,
    });
    openServiceRequestSent();
  };

  return (
    <View style={styles.ServicesScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.ServicesScreenScrollContent,
          {paddingBottom: insets.bottom + layout.screenPadding},
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <LinearGradient
          colors={['#131228', colors.surface]}
          style={styles.ServicesScreenHeaderGradient}>
          <View
            style={[
              styles.ServicesScreenHeaderInset,
              {paddingTop: insets.top + 16},
            ]}>
            <View style={styles.ServicesScreenHeaderRowLintel}>
              <View style={styles.ServicesScreenHeaderTextEnclave}>
                <Text style={styles.ServicesScreenEyebrowFiligree}>
                  NINE CASINO
                </Text>
                <Text style={styles.ServicesScreenTitleFiligree}>Services</Text>
                <Text style={styles.ServicesScreenSubtitleFiligree}>
                  Book venue services or request taxi transport.
                </Text>
              </View>
              <MyRequestsChipButton onPress={openMyRequests} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.ServicesScreenBodyLintel}>
          <ServicesTabSwitcher activeTab={activeTab} onSelect={setActiveTab} />

          {activeTab === 'venue' ? (
            <View style={styles.ServicesScreenVenueListLintel}>
              {VENUE_SERVICES.map(service => (
                <ServiceListCard
                  key={service.id}
                  service={service}
                  onPress={() => openServiceBooking(service.id)}
                />
              ))}
            </View>
          ) : (
            <View style={styles.ServicesScreenTaxiLintel}>
              <Text style={styles.ServicesScreenSectionLabel}>
                QUICK OPTIONS
              </Text>
              <View style={styles.ServicesScreenQuickGrid}>
                {TAXI_QUICK_OPTIONS.map((option, index) => (
                  <View
                    key={option.id}
                    style={[
                      styles.ServicesScreenQuickCell,
                      index % 2 === 0 && styles.ServicesScreenQuickCellLeft,
                    ]}>
                    <TaxiQuickOptionCard
                      option={option}
                      selected={selectedQuickOption === option.id}
                      onPress={() => setSelectedQuickOption(option.id)}
                    />
                  </View>
                ))}
              </View>

              <Text style={styles.ServicesScreenTaxiTitleFiligree}>
                Taxi Request Details
              </Text>

              <ServiceFormField
                label="PICKUP TIME"
                value={pickupTime}
                onChangeText={setPickupTime}
                placeholder="e.g. 11:30 PM"
              />
              <ServiceFormField
                label="NUMBER OF PASSENGERS"
                value={passengers}
                onChangeText={setPassengers}
                placeholder="e.g. 2"
              />
              <ServiceFormField
                label="DESTINATION"
                value={destination}
                onChangeText={setDestination}
                placeholder="Enter your destination..."
              />

              <View style={styles.ServicesScreenVehicleCard}>
                <Text style={styles.ServicesScreenSectionLabel}>
                  VEHICLE PREFERENCE
                </Text>
                <VehiclePreferenceChips
                  value={vehiclePreference}
                  options={VEHICLE_OPTIONS}
                  onChange={value =>
                    setVehiclePreference(value as VehicleOption)
                  }
                />
              </View>

              <ServiceFormField
                label="DRIVER NOTES"
                value={driverNotes}
                onChangeText={setDriverNotes}
                placeholder="Any pickup details or special notes..."
                multiline
              />

              <PrimaryButton
                label="Send Taxi Request"
                onPress={handleTaxiSubmit}
                fullWidth
                compact
                icon="🚕"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ServicesScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ServicesScreenScrollContent: {
    gap: 0,
  },

  ServicesScreenHeaderInset: {
    paddingBottom: 16,
    paddingHorizontal: layout.screenPadding,
  },
  ServicesScreenHeaderRowLintel: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ServicesScreenHeaderTextEnclave: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  ServicesScreenEyebrowFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1.12,
    textTransform: 'uppercase',
  },
  ServicesScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.07,
    lineHeight: 29,
  },
  ServicesScreenSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 19.5,
    marginTop: 3,
  },
  ServicesScreenBodyLintel: {
    gap: 10,
    paddingHorizontal: layout.screenPadding,
    paddingTop: 4,
  },
  ServicesScreenVenueListLintel: {
    gap: 10,
    marginTop: 6,
  },
  ServicesScreenTaxiLintel: {
    gap: 10,
    marginTop: 6,
  },
  ServicesScreenSectionLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
    marginBottom: 2,
  },
  ServicesScreenQuickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  ServicesScreenQuickCell: {
    marginBottom: 8,
    paddingHorizontal: 4,
    width: '50%',
  },
  ServicesScreenQuickCellLeft: {},
  ServicesScreenTaxiTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
  ServicesScreenVehicleCard: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    padding: 16,
  },
});
