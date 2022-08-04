import React, { createContext, ReactNode, useEffect, useState } from "react";
import { continents } from "../data/continents";

export interface ContinentsContextType {
  continentId: number;
  slug: string,
  continentName: string;
  continentTitle: string;
  continentDescription: string;
  continentLanguages: number;
  continentMostCities: number;
  bgImage: string;
  //city[{}]Array: ( cityName: string, country: string, flag: string ) => void;
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
  const continentTitle = continents[0].continentTitle;
  const bgImage = continents[0].bgImage;
  const slug = continents[0].slug;

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
        slug
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
}
