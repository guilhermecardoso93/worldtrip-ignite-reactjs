import { BrowserRouter as  Route, Link } from "react-router-dom";

import { Home } from "./pages";

export function App() {
  return (
    <Route>
      <Link to="/">
        {<Home />}
      </Link>
    </Route>
  );
}
