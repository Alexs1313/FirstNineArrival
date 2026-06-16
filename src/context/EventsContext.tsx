import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type EventsContextValue = {
  savedEventIds: string[];
  reminderEventIds: string[];
  isEventSaved: (eventId: string) => boolean;
  hasReminder: (eventId: string) => boolean;
  toggleSaved: (eventId: string) => void;
  addReminder: (eventId: string) => void;
  savedCount: number;
};

const EventsContext = createContext<EventsContextValue | null>(null);

export function EventsProvider({children}: {children: React.ReactNode}) {
  const [savedEventIds, setSavedEventIds] = useState<string[]>([]);
  const [reminderEventIds, setReminderEventIds] = useState<string[]>([]);

  const isEventSaved = useCallback(
    (eventId: string) => savedEventIds.includes(eventId),
    [savedEventIds],
  );

  const hasReminder = useCallback(
    (eventId: string) => reminderEventIds.includes(eventId),
    [reminderEventIds],
  );

  const toggleSaved = useCallback((eventId: string) => {
    setSavedEventIds(current =>
      current.includes(eventId)
        ? current.filter(id => id !== eventId)
        : [...current, eventId],
    );
  }, []);

  const addReminder = useCallback((eventId: string) => {
    setReminderEventIds(current =>
      current.includes(eventId) ? current : [...current, eventId],
    );
  }, []);

  const value = useMemo(
    () => ({
      savedEventIds,
      reminderEventIds,
      isEventSaved,
      hasReminder,
      toggleSaved,
      addReminder,
      savedCount: savedEventIds.length,
    }),
    [
      savedEventIds,
      reminderEventIds,
      isEventSaved,
      hasReminder,
      toggleSaved,
      addReminder,
    ],
  );

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEvents must be used within EventsProvider');
  }
  return context;
}
