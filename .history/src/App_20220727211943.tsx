import { BrowserRouter as  Router, Link } from "react-router-dom";

import { Home } from "./pages";

export function App() {
  return (
    <Router>
      <Link to="/">
        {<Home />}
      </Link>
    </Router>
  );
}
