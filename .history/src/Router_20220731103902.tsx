import {Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Continent } from "./pages/continent/[slug]";


export function Router() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/continent" element={<Continent />} />
      <Route path="/continent/:slug" element={<Continent />} />
    </Routes>
  );
}



