import { createContext, ReactNode, useEffect, useState } from "react";
import { continents } from "../data/continents";

export interface ContinentsContextType {
  continentId: number;
  continentName: string;
  continentDescription: string;
  continentLanguages: number;
  continentMostCities: number;
  city?: {
    cityName?: string;
    country: string;
    flag: string;
  };
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
  const cityName = continents[0].city[0].cityName
  const cityCountry = continents[0].city[0].country;
  const cityFlag = continents[0].city[0].flag;

  return (
    <ContinentContext.Provider
      value={{
        continentId,
        continentName,
        continentDescription,
        continentLanguages,
        continentMostCities,
        cityCountry
      }}
    />
  );
}
