import React, { createContext, ReactNode, useEffect, useState } from "react";
import { continents } from "../data/continents";

export interface ContinentsContextType {
  continentId: number;
  continentName: string;
  continentDescription: string;
  continentLanguages: number;
  continentMostCities: number;
  city?: ( cityName: string, country: string, flag: string ) => void;
}


interface ContinentContextProviderProps {
  children: ReactNode;
}
export const ContinentContext = createContext({} as ContinentsContextType);



export function ContinentContextProvider(
  { children }: ContinentContextProviderProps,
) {

  const continentId = continents[0].continentId;
  const continentName = continents[0].continentName;
  const continentDescription = continents[0].continentDescription;
  const continentLanguages = continents[0].continentLanguages;
  const continentMostCities = continents[0].continentMostCities;

  
  return (
    <ContinentContext.Provider
      value={{
        continentId,
        continentName,
        continentDescription,
        continentLanguages,
        continentMostCities,
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
}
