import React from 'react';
import { useCustomization } from '../contexts/CustomizationContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { primaryColor, secondaryColor, textColor } = useCustomization();

  return (
    <div style={{
      '--primary-color': primaryColor,
      '--secondary-color': secondaryColor,
      '--text-color': textColor,
    } as React.CSSProperties}>
      {children}
    </div>
  );
};

