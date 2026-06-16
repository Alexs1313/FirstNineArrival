import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ServiceRequest} from '../../context/ServicesContext';
import {
  getRequestStatusDisplay,
  getRequestTag,
  getRequestTitle,
} from '../../context/ServicesContext';
import {getVenueServiceById} from '../../data/services';
import {colors, fonts} from '../../constants/theme';

type RequestDetailCardProps = {
  request: ServiceRequest;
  showFooter?: boolean;
};

export function RequestDetailCard({
  request,
  showFooter = true,
}: RequestDetailCardProps) {
  const title = getRequestTitle(request);
  const tag = getRequestTag(request);
  const statusLabel = getRequestStatusDisplay(request.status);

  const rows =
    request.kind === 'venue'
      ? [
          {label: 'Status', value: statusLabel, highlight: true},
          {label: 'Service Type', value: tag},
          {label: 'Date', value: request.date},
          {label: 'Time', value: request.time},
          {label: 'Guest Count', value: request.guestCount},
        ]
      : [
          {label: 'Status', value: statusLabel, highlight: true},
          {label: 'Service Type', value: tag},
          {label: 'Date', value: request.date},
          {label: 'Time', value: request.time},
          {label: 'Passengers', value: request.passengers},
          {label: 'Destination', value: request.destination || '—'},
        ];

  return (
    <View style={styles.RequestDetailCardFacetChassis}>
      <Text style={styles.RequestDetailCardTitleFiligree}>{title}</Text>

      {rows.map((row, index) => (
        <View key={row.label}>
          {index > 0 ? <View style={styles.RequestDetailCardDivider} /> : null}
          <View style={styles.RequestDetailCardRow}>
            <Text style={styles.RequestDetailCardLabel}>{row.label}</Text>
            <Text
              style={[
                styles.RequestDetailCardValueFiligree,
                row.highlight && styles.RequestDetailCardValueHighlight,
              ]}>
              {row.value}
            </Text>
          </View>
        </View>
      ))}

      {showFooter ? (
        <Text style={styles.RequestDetailCardFooterFiligree}>
          A guest service team member will confirm the details of your request
          shortly.
        </Text>
      ) : null}
    </View>
  );
}

type ServiceInfoCardProps = {
  serviceId: string;
};

export function ServiceInfoCard({serviceId}: ServiceInfoCardProps) {
  const service = getVenueServiceById(serviceId);
  if (!service) {
    return null;
  }

  return (
    <View style={styles.ServiceInfoCardFacetChassis}>
      <View style={styles.ServiceInfoCardTagRow}>
        <View style={styles.ServiceInfoCardTagBadge}>
          <Text style={styles.ServiceInfoCardTagFiligree}>
            {service.tag.toUpperCase()}
          </Text>
        </View>
      </View>
      <Text style={styles.ServiceInfoCardDescriptionFiligree}>
        {service.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  RequestDetailCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 0,
    padding: 17,
  },
  RequestDetailCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  RequestDetailCardRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  RequestDetailCardDivider: {
    backgroundColor: colors.borderMuted,
    height: 1,
  },
  RequestDetailCardLabel: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  RequestDetailCardValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
  },
  RequestDetailCardValueHighlight: {
    color: '#e8a040',
  },
  RequestDetailCardFooterFiligree: {
    color: colors.label,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },
  ServiceInfoCardFacetChassis: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.borderMuted,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    padding: 16,
  },
  ServiceInfoCardTagRow: {
    flexDirection: 'row',
  },
  ServiceInfoCardTagBadge: {
    backgroundColor: '#221808',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ServiceInfoCardTagFiligree: {
    color: '#e8c864',
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  ServiceInfoCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 20,
  },
});
