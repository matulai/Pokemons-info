import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PokemonPage } from "@/pages";
import { Link } from "react-router-dom";

import "@/App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="page-header">
        <h1>
          <Link to="/" className="page-header-link">
            Pokemon info
          </Link>
        </h1>
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
