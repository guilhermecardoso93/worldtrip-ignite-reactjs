import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { Continent } from "./pages/continent/[slug]";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
