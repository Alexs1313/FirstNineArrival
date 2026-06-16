import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type {ServiceTag, VehicleOption} from '../data/services';
import {getVenueServiceById} from '../data/services';

export type RequestStatus = 'pending' | 'confirmed' | 'completed';

export type VenueServiceRequest = {
  id: string;
  kind: 'venue';
  serviceId: string;
  status: RequestStatus;
  date: string;
  time: string;
  guestCount: string;
  contactName: string;
  preferredZone: string;
  notes: string;
  priority: 'standard' | 'urgent';
  submittedLabel: string;
};

export type TaxiServiceRequest = {
  id: string;
  kind: 'taxi';
  status: RequestStatus;
  pickupTime: string;
  passengers: string;
  destination: string;
  vehiclePreference: VehicleOption;
  driverNotes: string;
  quickOptionId?: string;
  submittedLabel: string;
  date: string;
  time: string;
};

export type ServiceRequest = VenueServiceRequest | TaxiServiceRequest;

export type VenueBookingInput = {
  date: string;
  time: string;
  guestCount: string;
  contactName: string;
  preferredZone: string;
  notes: string;
  priority: 'standard' | 'urgent';
};

export type TaxiBookingInput = {
  pickupTime: string;
  passengers: string;
  destination: string;
  vehiclePreference: VehicleOption;
  driverNotes: string;
  quickOptionId?: string;
};

const SEED_REQUESTS: ServiceRequest[] = [
  {
    id: 'seed-venue-1',
    kind: 'venue',
    serviceId: 'table-reservation',
    status: 'pending',
    date: 'Jun 16',
    time: '7:00 PM',
    guestCount: '2',
    contactName: 'Guest',
    preferredZone: 'Main Lounge',
    notes: '',
    priority: 'standard',
    submittedLabel: 'Jun 16 7:00 PM',
  },
  {
    id: 'seed-venue-2',
    kind: 'venue',
    serviceId: 'vip-lounge-request',
    status: 'confirmed',
    date: 'Jun 16',
    time: '8:00 PM',
    guestCount: '2',
    contactName: 'Guest',
    preferredZone: 'VIP Lounge',
    notes: '',
    priority: 'standard',
    submittedLabel: 'Jun 16 8:00 PM',
  },
  {
    id: 'seed-venue-3',
    kind: 'venue',
    serviceId: 'personal-host-assistance',
    status: 'completed',
    date: 'Jun 16',
    time: '6:30 PM',
    guestCount: '1',
    contactName: 'Guest',
    preferredZone: '',
    notes: '',
    priority: 'standard',
    submittedLabel: 'Jun 16 6:30 PM',
  },
  {
    id: 'seed-taxi-1',
    kind: 'taxi',
    status: 'pending',
    pickupTime: '11:30 PM',
    passengers: '2',
    destination: 'City Center Hotel',
    vehiclePreference: 'Standard',
    driverNotes: '',
    submittedLabel: 'Jun 16 11:30 PM',
    date: 'Jun 16',
    time: '11:30 PM',
  },
];

type ServicesContextValue = {
  requests: ServiceRequest[];
  lastSubmittedRequest: ServiceRequest | null;
  submitVenueRequest: (
    serviceId: string,
    input: VenueBookingInput,
  ) => ServiceRequest;
  submitTaxiRequest: (input: TaxiBookingInput) => ServiceRequest;
  updateVenueRequest: (
    requestId: string,
    input: VenueBookingInput,
  ) => ServiceRequest | null;
  cancelRequest: (requestId: string) => void;
  getRequestById: (requestId: string) => ServiceRequest | undefined;
};

const ServicesContext = createContext<ServicesContextValue | null>(null);

function buildSubmittedLabel(date: string, time: string) {
  const trimmedDate = date.trim();
  const trimmedTime = time.trim();
  if (trimmedDate && trimmedTime) {
    return `${trimmedDate} ${trimmedTime}`;
  }
  return trimmedDate || trimmedTime || 'Jun 16';
}

export function ServicesProvider({children}: {children: React.ReactNode}) {
  const [requests, setRequests] = useState<ServiceRequest[]>(SEED_REQUESTS);
  const [lastSubmittedRequest, setLastSubmittedRequest] =
    useState<ServiceRequest | null>(null);

  const getRequestById = useCallback(
    (requestId: string) => requests.find(request => request.id === requestId),
    [requests],
  );

  const submitVenueRequest = useCallback(
    (serviceId: string, input: VenueBookingInput) => {
      const request: VenueServiceRequest = {
        id: `${Date.now()}`,
        kind: 'venue',
        serviceId,
        status: 'pending',
        date: input.date.trim() || 'Jun 16',
        time: input.time.trim() || '7:00 PM',
        guestCount: input.guestCount.trim() || '2',
        contactName: input.contactName.trim(),
        preferredZone: input.preferredZone.trim(),
        notes: input.notes.trim(),
        priority: input.priority,
        submittedLabel: buildSubmittedLabel(input.date, input.time),
      };

      setRequests(current => [request, ...current]);
      setLastSubmittedRequest(request);
      return request;
    },
    [],
  );

  const submitTaxiRequest = useCallback((input: TaxiBookingInput) => {
    const request: TaxiServiceRequest = {
      id: `${Date.now()}`,
      kind: 'taxi',
      status: 'pending',
      pickupTime: input.pickupTime.trim() || '11:30 PM',
      passengers: input.passengers.trim() || '2',
      destination: input.destination.trim(),
      vehiclePreference: input.vehiclePreference,
      driverNotes: input.driverNotes.trim(),
      quickOptionId: input.quickOptionId,
      date: 'Jun 16',
      time: input.pickupTime.trim() || '11:30 PM',
      submittedLabel: buildSubmittedLabel('Jun 16', input.pickupTime),
    };

    setRequests(current => [request, ...current]);
    setLastSubmittedRequest(request);
    return request;
  }, []);

  const updateVenueRequest = useCallback(
    (requestId: string, input: VenueBookingInput) => {
      let updated: VenueServiceRequest | null = null;

      setRequests(current =>
        current.map(request => {
          if (request.id !== requestId || request.kind !== 'venue') {
            return request;
          }

          updated = {
            ...request,
            date: input.date.trim() || request.date,
            time: input.time.trim() || request.time,
            guestCount: input.guestCount.trim() || request.guestCount,
            contactName: input.contactName.trim(),
            preferredZone: input.preferredZone.trim(),
            notes: input.notes.trim(),
            priority: input.priority,
            submittedLabel: buildSubmittedLabel(input.date, input.time),
            status: 'pending',
          };
          return updated;
        }),
      );

      if (updated) {
        setLastSubmittedRequest(updated);
      }
      return updated;
    },
    [],
  );

  const cancelRequest = useCallback((requestId: string) => {
    setRequests(current => current.filter(request => request.id !== requestId));
  }, []);

  const value = useMemo(
    () => ({
      requests,
      lastSubmittedRequest,
      submitVenueRequest,
      submitTaxiRequest,
      updateVenueRequest,
      cancelRequest,
      getRequestById,
    }),
    [
      requests,
      lastSubmittedRequest,
      submitVenueRequest,
      submitTaxiRequest,
      updateVenueRequest,
      cancelRequest,
      getRequestById,
    ],
  );

  return (
    <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within ServicesProvider');
  }
  return context;
}

export function getRequestStatusLabel(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return 'PENDING';
    case 'confirmed':
      return 'CONFIRMED';
    case 'completed':
      return 'COMPLETED';
  }
}

export function getRequestStatusColors(status: RequestStatus): {
  background: string;
  color: string;
} {
  switch (status) {
    case 'pending':
      return {background: 'rgba(196, 145, 44, 0.15)', color: '#e8a040'};
    case 'confirmed':
      return {background: 'rgba(40, 144, 74, 0.15)', color: '#4ade80'};
    case 'completed':
      return {background: 'rgba(90, 80, 104, 0.2)', color: '#8a7a98'};
  }
}

export function getRequestTitle(request: ServiceRequest): string {
  if (request.kind === 'taxi') {
    return 'Taxi Request';
  }
  return getVenueServiceById(request.serviceId)?.title ?? 'Service Request';
}

export function getRequestTag(request: ServiceRequest): ServiceTag {
  if (request.kind === 'taxi') {
    return 'Transport';
  }
  return getVenueServiceById(request.serviceId)?.tag ?? 'Guest Care';
}

export function getRequestStatusDisplay(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'confirmed':
      return 'Confirmed';
    case 'completed':
      return 'Completed';
  }
}

export function getRequestConfirmationBadge(status: RequestStatus): string {
  switch (status) {
    case 'pending':
      return 'Pending Confirmation';
    case 'confirmed':
      return 'Confirmed';
    case 'completed':
      return 'Completed';
  }
}
