import { BrowserRouter as  Router, Link } from "react-router-dom";

import { Home } from "./pages";
import { Continent } from "./pages/continent/[slug]";

export function App() {
  return (
    <Router>
      <Link to="/">
        {<Home />}
      </Link>
      <Link to="/continent">
        <Continent/>
      </Link>
    </Router>
  );
}
