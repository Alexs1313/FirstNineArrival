import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type OffersContextValue = {
  savedOfferIds: string[];
  lastRequestedOfferId: string | null;
  savedCount: number;
  isOfferSaved: (offerId: string) => boolean;
  toggleSaved: (offerId: string) => void;
  requestOffer: (offerId: string) => void;
};

const OffersContext = createContext<OffersContextValue | null>(null);

export function OffersProvider({children}: {children: React.ReactNode}) {
  const [savedOfferIds, setSavedOfferIds] = useState<string[]>([]);
  const [lastRequestedOfferId, setLastRequestedOfferId] = useState<string | null>(
    null,
  );

  const isOfferSaved = useCallback(
    (offerId: string) => savedOfferIds.includes(offerId),
    [savedOfferIds],
  );

  const toggleSaved = useCallback((offerId: string) => {
    setSavedOfferIds(current =>
      current.includes(offerId)
        ? current.filter(id => id !== offerId)
        : [...current, offerId],
    );
  }, []);

  const requestOffer = useCallback((offerId: string) => {
    setLastRequestedOfferId(offerId);
  }, []);

  const value = useMemo(
    () => ({
      savedOfferIds,
      lastRequestedOfferId,
      savedCount: savedOfferIds.length,
      isOfferSaved,
      toggleSaved,
      requestOffer,
    }),
    [savedOfferIds, lastRequestedOfferId, isOfferSaved, toggleSaved, requestOffer],
  );

  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
}

export function useOffers() {
  const context = useContext(OffersContext);
  if (!context) {
    throw new Error('useOffers must be used within OffersProvider');
  }
  return context;
}
