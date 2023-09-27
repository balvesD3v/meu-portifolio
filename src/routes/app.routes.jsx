import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Projetos } from "../pages/Projetos";
import { Contato } from "../pages/Contato";

import { AnimatePresence } from "framer-motion";

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </AnimatePresence>
  );
}
