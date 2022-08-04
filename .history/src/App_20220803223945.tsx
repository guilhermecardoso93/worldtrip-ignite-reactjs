import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ContinentContextProvider } from "./context/ContinentContext";
import { continents } from "./data/continents";
import { Router } from "./Router";

export function App() {
  return (
    <ContinentContextProvider >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ContinentContextProvider>
  );
}
