
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import FavoritesPage from "./components/FavoritesPage"; 
import About from "./components/About";  // Import the About component
import { FavoritesProvider } from "./components/FavoritesContext"; 
import NewShoeForm from "./components/NewShoeForm";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <FavoritesProvider> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/newshoeform" element={<NewShoeForm />} />
      </Routes>
    </FavoritesProvider>
  </BrowserRouter>
);
