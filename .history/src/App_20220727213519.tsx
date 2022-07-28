import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Home } from "./pages";
import { Continent } from "./pages/continent/[slug]";

export function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/continent" element={<Continent />} />
    </Router>
  );
}
