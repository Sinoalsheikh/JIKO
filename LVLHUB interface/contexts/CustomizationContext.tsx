import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CustomizationContextType {
  companyName: string;
  setCompanyName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  tagline: string;
  setTagline: (tagline: string) => void;
  industry: string;
  setIndustry: (industry: string) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  missionStatement: string;
  setMissionStatement: (statement: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

export const CustomizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [companyName, setCompanyName] = useState('LVLHub Business Suite');
  const [logo, setLogo] = useState('/default-logo.png');
  const [tagline, setTagline] = useState('Elevate Your Business');
  const [industry, setIndustry] = useState('Technology');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#1E40AF');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [missionStatement, setMissionStatement] = useState('Empowering businesses with innovative solutions');
  const [location, setLocation] = useState('San Francisco, CA');

  return (
    <CustomizationContext.Provider
      value={{
        companyName, setCompanyName,
        logo, setLogo,
        tagline, setTagline,
        industry, setIndustry,
        primaryColor, setPrimaryColor,
        secondaryColor, setSecondaryColor,
        textColor, setTextColor,
        missionStatement, setMissionStatement,
        location, setLocation,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error('useCustomization must be used within a CustomizationProvider');
  }
  return context;
};

