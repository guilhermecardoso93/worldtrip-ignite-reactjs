import { useContext } from "react";
import { ContinentContext } from "../context/ContinentContext";

export function useCart() {
  const context = useContext(ContinentContext);
  return context;
}
