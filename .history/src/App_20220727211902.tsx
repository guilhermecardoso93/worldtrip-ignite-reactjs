import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
