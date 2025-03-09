import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages";

import "@/App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="page-header">
        <h1>Pokemon info</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <footer className="page-footer">this is the footer</footer>
    </BrowserRouter>
  );
}

export default App;
