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
  continentMostCitiesTree: string;
  bgImage: string;
  bgImageBanner: string;
  city?: { cityName: string; country: string; flag: string }[];
}

interface ContinentContextProviderProps {
  children: ReactNode;
}
export const ContinentContext = createContext({} as ContinentsContextType);

const continentId = continents[0].continentId;
const continentName = continents[0].continentName;
const continentDescription = continents[0].continentDescription;
const continentLanguages = continents[0].continentLanguages;
const continentMostCities = continents[0].continentMostCities;
const continentCountries = continents[0].continentCountries;
const continentTitle = continents[0].continentTitle;
const bgImage = continents[0].bgImage;
const bgImageBanner = continents[0].bgImageBanner;
const slug = continents[0].slug;
const cityName = continents[0].city[0].cityName;  

export function ContinentContextProvider(
  { children }: ContinentContextProviderProps,
) {
  const [continent, setContinent] = useState<ContinentsContextType[]>([]);

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
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
}
