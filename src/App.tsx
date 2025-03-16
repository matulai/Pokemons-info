import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PokemonPage } from "@/pages";

import "@/App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="page-header">
        <h1>Pokemon info</h1>
      </header>
      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </main>
      <footer className="page-footer">
          <p>© 2025 Pokemon info.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
