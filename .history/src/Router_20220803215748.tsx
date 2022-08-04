import { Route, Routes } from "react-router-dom";
import { continents } from "./data/continents";
import { useContinent } from "./hooks/useContinent";
import { Continent } from "./pages/continent/[slug]";
import { Home } from "./pages/Home";

export function Router() {
  const { slug } = useContinent()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/continent/:${slug}`} element={<Continent />} />
    </Routes>
  );
}
