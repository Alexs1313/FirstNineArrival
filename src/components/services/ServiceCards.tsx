import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import type {TaxiQuickOption, VenueService} from '../../data/services';
import {colors, fonts, layout} from '../../constants/theme';
import {ServiceTagBadge} from './ServiceBadges';

type ServiceListCardProps = {
  service: VenueService;
  onPress: () => void;
};

export function ServiceListCard({service, onPress}: ServiceListCardProps) {
  return (
    <View style={styles.ServiceListCardFacetChassis}>
      <View style={styles.ServiceListCardInset}>
        <View style={styles.ServiceListCardTopLintel}>
          <View style={styles.ServiceListCardIconEnclave}>
            <Text style={styles.ServiceListCardIconSigil}>{service.icon}</Text>
          </View>
          <ServiceTagBadge tag={service.tag} />
        </View>

        <Text style={styles.ServiceListCardTitleFiligree}>{service.title}</Text>
        <Text style={styles.ServiceListCardDescriptionFiligree}>
          {service.description}
        </Text>

        <Pressable
          onPress={onPress}
          style={({pressed}) => [
            styles.ServiceListCardActionPortico,
            pressed && styles.ServiceListCardActionPressedDim,
          ]}>
          <Text style={styles.ServiceListCardActionFiligree}>
            {service.buttonLabel}
          </Text>
          <Text style={styles.ServiceListCardActionArrowSigil}>→</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ServicesTabSwitcherProps = {
  activeTab: 'venue' | 'taxi';
  onSelect: (tab: 'venue' | 'taxi') => void;
};

export function ServicesTabSwitcher({
  activeTab,
  onSelect,
}: ServicesTabSwitcherProps) {
  return (
    <View style={styles.ServicesTabSwitcherFacetChassis}>
      <Pressable
        onPress={() => onSelect('venue')}
        style={[
          styles.ServicesTabSwitcherTab,
          activeTab === 'venue' && styles.ServicesTabSwitcherTabActive,
        ]}>
        <Text style={styles.ServicesTabSwitcherIconSigil}>🔔</Text>
        <Text
          style={[
            styles.ServicesTabSwitcherFiligree,
            activeTab === 'venue' && styles.ServicesTabSwitcherFiligreeActive,
          ]}>
          Venue Services
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onSelect('taxi')}
        style={[
          styles.ServicesTabSwitcherTab,
          activeTab === 'taxi' && styles.ServicesTabSwitcherTabActive,
        ]}>
        <Text style={styles.ServicesTabSwitcherIconSigil}>🚕</Text>
        <Text
          style={[
            styles.ServicesTabSwitcherFiligree,
            activeTab === 'taxi' && styles.ServicesTabSwitcherFiligreeActive,
          ]}>
          Taxi Booking
        </Text>
      </Pressable>
    </View>
  );
}

type TaxiQuickOptionCardProps = {
  option: TaxiQuickOption;
  selected: boolean;
  onPress: () => void;
};

export function TaxiQuickOptionCard({
  option,
  selected,
  onPress,
}: TaxiQuickOptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.TaxiQuickOptionCardFacetChassis,
        selected && styles.TaxiQuickOptionCardFacetChassisSelected,
        pressed && styles.TaxiQuickOptionCardPressedDim,
      ]}>
      <Text style={styles.TaxiQuickOptionCardIconSigil}>{option.icon}</Text>
      <Text style={styles.TaxiQuickOptionCardTitleFiligree}>{option.title}</Text>
      <Text style={styles.TaxiQuickOptionCardSubtitleFiligree}>
        {option.subtitle}
      </Text>
    </Pressable>
  );
}

type VehiclePreferenceChipsProps = {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

export function VehiclePreferenceChips({
  value,
  options,
  onChange,
}: VehiclePreferenceChipsProps) {
  return (
    <View style={styles.VehiclePreferenceChipsLintel}>
      {options.map(option => {
        const active = value === option;
        const wide = option === 'Accessibility Support';

        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            style={[
              styles.VehiclePreferenceChip,
              wide && styles.VehiclePreferenceChipWide,
              active && styles.VehiclePreferenceChipActive,
            ]}>
            <Text
              style={[
                styles.VehiclePreferenceChipFiligree,
                active && styles.VehiclePreferenceChipFiligreeActive,
              ]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

type PriorityToggleProps = {
  value: 'standard' | 'urgent';
  onChange: (value: 'standard' | 'urgent') => void;
};

export function PriorityToggle({value, onChange}: PriorityToggleProps) {
  return (
    <View style={styles.PriorityToggleFacetChassis}>
      <Pressable
        onPress={() => onChange('standard')}
        style={[
          styles.PriorityToggleTab,
          value === 'standard' && styles.PriorityToggleTabActive,
        ]}>
        <Text
          style={[
            styles.PriorityToggleFiligree,
            value === 'standard' && styles.PriorityToggleFiligreeActive,
          ]}>
          Standard
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onChange('urgent')}
        style={[
          styles.PriorityToggleTab,
          value === 'urgent' && styles.PriorityToggleTabActive,
        ]}>
        <Text
          style={[
            styles.PriorityToggleFiligree,
            value === 'urgent' && styles.PriorityToggleFiligreeActive,
          ]}>
          Urgent
        </Text>
      </Pressable>
    </View>
  );
}

type ServiceFormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
};

export function ServiceFormField({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
}: ServiceFormFieldProps) {
  return (
    <View style={styles.ServiceFormFieldFacetChassis}>
      <Text style={styles.ServiceFormFieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.label}
        multiline={multiline}
        style={[
          styles.ServiceFormFieldInput,
          multiline && styles.ServiceFormFieldInputMultiline,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceListCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
  },
  ServiceListCardInset: {
    gap: 0,
    padding: 16,
  },
  ServiceListCardTopLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  ServiceListCardIconEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(196, 145, 44, 0.1)',
    borderColor: 'rgba(196, 145, 44, 0.25)',
    borderRadius: 12,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  ServiceListCardIconSigil: {
    fontSize: 20,
  },
  ServiceListCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  ServiceListCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
  },
  ServiceListCardActionPortico: {
    alignItems: 'center',
    backgroundColor: '#1a1935',
    borderColor: 'rgba(196, 145, 44, 0.27)',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    height: layout.buttonHeightCompact,
    justifyContent: 'center',
    marginTop: 14,
  },
  ServiceListCardActionPressedDim: {
    opacity: 0.85,
  },
  ServiceListCardActionFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  ServiceListCardActionArrowSigil: {
    color: colors.gold,
    fontSize: 14,
  },
  ServicesTabSwitcherFacetChassis: {
    backgroundColor: '#1a1935',
    borderColor: colors.borderMuted,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 4,
    padding: 4,
  },
  ServicesTabSwitcherTab: {
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    paddingVertical: 12,
  },
  ServicesTabSwitcherTabActive: {
    backgroundColor: colors.buttonGradientStart,
  },
  ServicesTabSwitcherIconSigil: {
    fontSize: 14,
  },
  ServicesTabSwitcherFiligree: {
    color: colors.body,
    fontFamily: fonts.sansSemiBold,
    fontSize: 12,
    fontWeight: '600',
  },
  ServicesTabSwitcherFiligreeActive: {
    color: colors.buttonText,
  },
  TaxiQuickOptionCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    gap: 4,
    minHeight: 96,
    padding: 14,
  },
  TaxiQuickOptionCardFacetChassisSelected: {
    borderColor: colors.buttonGradientStart,
  },
  TaxiQuickOptionCardPressedDim: {
    opacity: 0.85,
  },
  TaxiQuickOptionCardIconSigil: {
    fontSize: 18,
    marginBottom: 4,
  },
  TaxiQuickOptionCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 13,
    fontWeight: '700',
  },
  TaxiQuickOptionCardSubtitleFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  VehiclePreferenceChipsLintel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  VehiclePreferenceChip: {
    borderColor: colors.borderMuted,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  VehiclePreferenceChipWide: {
    borderRadius: 10,
  },
  VehiclePreferenceChipActive: {
    borderColor: colors.buttonGradientStart,
  },
  VehiclePreferenceChipFiligree: {
    color: colors.body,
    fontFamily: fonts.sansSemiBold,
    fontSize: 12,
    fontWeight: '600',
  },
  VehiclePreferenceChipFiligreeActive: {
    color: colors.buttonGradientStart,
  },
  PriorityToggleFacetChassis: {
    backgroundColor: '#1a1935',
    borderColor: colors.borderMuted,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 4,
    padding: 4,
  },
  PriorityToggleTab: {
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 10,
  },
  PriorityToggleTabActive: {
    borderColor: colors.buttonGradientStart,
    borderWidth: 1,
  },
  PriorityToggleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
  },
  PriorityToggleFiligreeActive: {
    color: colors.buttonGradientStart,
  },
  ServiceFormFieldFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    padding: 16,
  },
  ServiceFormFieldLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.9,
  },
  ServiceFormFieldInput: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    padding: 0,
  },
  ServiceFormFieldInputMultiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
});
