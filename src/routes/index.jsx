import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../components/AnimatedRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
