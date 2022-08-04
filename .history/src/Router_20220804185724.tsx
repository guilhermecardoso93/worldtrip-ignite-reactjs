import { Route, Routes } from "react-router-dom";
import { Continent } from "./pages/continent/[slug]";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/continent/:${slug}`} element={<Continent />} />
      <Route path="/continent/:slug" element={<Continent />} />
    </Routes>
  );
}
