'use client';
import React from 'react';

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabledContext() {
  const context = React.useContext(SoundEnabledContext);
  if (context === undefined) {
    throw new Error('useSoundEnabledContext must be used within a SoundEnabledProvider');
  }
  return context;
}

export default SoundEnabledProvider;
