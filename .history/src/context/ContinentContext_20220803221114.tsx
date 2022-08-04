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
  const continentId = continents[5].continentId;
  const continentName = continents[5].continentName;
  const continentDescription = continents[5].continentDescription;
  const continentLanguages = continents[5].continentLanguages;
  const continentMostCities = continents[5].continentMostCities;
  const continentCountries = continents[5].continentCountries;
  const continentTitle = continents[5].continentTitle;
  const bgImage = continents[5].bgImage;
  const bgImageBanner = continents[5].bgImageBanner;
  const slug = continents[5].slug;
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
