import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import FavoritesPage from "./components/FavoritesPage"; 
import About from "./components/About"; 
import { FavoritesProvider } from "./components/FavoritesContext"; 
import NewShoeForm from "./components/NewShoeForm";
import SignUp from './SignUp'; 
import ErrorPage from "./ErrorPage";
import Navigation from "./components/Navigation/Nav"; 
import { UserContext } from "./UserContext";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const UserProvider = ({ children }) => {
  const [signedUpUser, setSignedUpUser] = useState(null);

  return (
    <UserContext.Provider value={{ signedUpUser, setSignedUpUser }}>
      {children}
    </UserContext.Provider>
  );
};

root.render(
  <BrowserRouter>
    <UserProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/newshoeform" element={<NewShoeForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </FavoritesProvider>
    </UserProvider>
  </BrowserRouter>
);
