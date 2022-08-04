import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
