import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Tax from "./pages/Tax.tsx";
import Payroll from "./pages/Payroll.tsx";
import Accounting from "./pages/Accounting.tsx";
import Legal from "./pages/Legal.tsx";
import type { Language } from "./types";

function Root() {
  const [language, setLanguage] = useState<Language>("id");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} onLanguageChange={setLanguage} />}
        />
        <Route
          path="/about"
          element={<About language={language} onLanguageChange={setLanguage} />}
        />
        <Route
          path="/tax"
          element={<Tax language={language} onLanguageChange={setLanguage} />}
        />
        <Route
          path="/payroll"
          element={
            <Payroll language={language} onLanguageChange={setLanguage} />
          }
        />
        <Route
          path="/accounting"
          element={
            <Accounting language={language} onLanguageChange={setLanguage} />
          }
        />
        <Route
          path="/legal"
          element={<Legal language={language} onLanguageChange={setLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
