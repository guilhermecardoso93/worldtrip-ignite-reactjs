import { useContext } from "react";
import { ContinentContext } from "../context/ContinentContext";

export function useContinent() {
  const context = useContext(ContinentContext);
  return context;
}
