import React, {createContext, useContext, useMemo, useState} from 'react';

import {generatePassId} from '../utils/generatePassId';

type AppContextValue = {
  passId: string;
};

const AppContext = createContext<AppContextValue | null>(null);

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({children}: AppProviderProps) {
  const [passId] = useState(() => generatePassId());

  const value = useMemo(
    () => ({
      passId,
    }),
    [passId],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
