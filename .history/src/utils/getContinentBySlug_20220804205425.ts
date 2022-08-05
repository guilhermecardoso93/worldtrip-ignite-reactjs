import { continents } from "../data/continents";

interface IContinent {
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
  city?: { cityName: string; country: string; flag: string; cityImg:string }[];
}

export function getContinentBySlug(slug: string) {
  return (
    continents.find((continent) => continent.slug === slug) ??
    ({} as IContinent)
  );
}