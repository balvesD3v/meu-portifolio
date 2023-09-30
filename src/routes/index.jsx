import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../components/AnimatedRoutes";
import { NavBar } from "../components/NavBar";

export function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
