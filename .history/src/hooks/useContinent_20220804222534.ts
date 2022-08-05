import { useParams } from "react-router-dom";
import { getContinentBySlug } from "../utils/getContinentBySlug";

export function useContinent() {
  const { slug } = useParams();
  const { path } = useParams();
  return getContinentBySlug(String(slug));
}
