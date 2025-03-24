import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PokemonPage } from "@/pages";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "@/App.css";

function App() {
  const showError = (message: string) => {
    toast.error(message, { position: "top-left" });
  };

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
          <Route path="/" element={<HomePage showError={showError} />} />
          <Route path="/pokemon/:id" element={<PokemonPage showError={showError} />} />
        </Routes>
      </main>
      <ToastContainer />
      <footer className="page-footer">
        <p>© 2025 Pokemon info.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
