import { useParams } from "react-router-dom";
import { getContinentBySlug } from "../utils/getContinentBySlug";

export function useContinent() {
  const { slug } = useParams();
  return getContinentBySlug(String(slug));
}