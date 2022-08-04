import React, { createContext, ReactNode, useEffect, useState } from "react";
import { continents } from "../data/continents";

export interface ContinentsContextType {
  continentId: number;
  slug: string;
  continentName: string;
  continentTitle: string;
  continentDescription: string;
  continentLanguages: number;
  continentMostCities: number;
  continentCountries: number;
  bgImage: string;
  bgImageBanner: string;
  city?: { cityName: string; country: string; flag: string };
}

interface Continent {
  continent: ContinentsContextType[];
}

interface ContinentContextProviderProps {
  children: ReactNode;
}
export const ContinentContext = createContext({} as ContinentsContextType);

export function ContinentContextProvider(
  { children }: ContinentContextProviderProps,
) {
  const continentId = continents[].continentId;
  const continentName = continents[].continentName;
  const continentDescription = continents[].continentDescription;
  const continentLanguages = continents[].continentLanguages;
  const continentMostCities = continents[].continentMostCities;
  const continentCountries = continents[].continentCountries;
  const continentTitle = continents[].continentTitle;
  const bgImage = continents[].bgImage;
  const bgImageBanner = continents[].bgImageBanner;
  const slug = continents[].slug;
  //const city = continents[0].city.

  return (
    <ContinentContext.Provider
      value={{
        continentId,
        continentName,
        continentDescription,
        continentLanguages,
        continentMostCities,
        continentTitle,
        bgImage,
        bgImageBanner,
        continentCountries,
        slug,
        //city
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
}
