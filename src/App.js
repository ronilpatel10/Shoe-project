import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import products from "./data";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import SignUpModal from './SignUpModal';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import UserContext from "./UserContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const storedUsername = localStorage.getItem('username');
  const [signedUpUser, setSignedUpUser] = useState(storedUsername || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUsername);  

  useEffect(() => {
    if (signedUpUser) {
      localStorage.setItem('username', signedUpUser);
    } else {
      localStorage.removeItem('username');
    }
}, [signedUpUser]);


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  

  const handleLogout = () => {
    setSignedUpUser(null);
    setIsLoggedIn(false);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, GOAT_Price, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          GOAT_Price === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, StockxPrice, GOAT_Price, StockxLink, GOATLink }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          StockxPrice={StockxPrice}
          GOAT_Price={GOAT_Price}
          StockxLink={StockxLink} 
          GOATLink={GOATLink} 
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {signedUpUser && <div>Welcome, {signedUpUser}!</div>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>} 
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} onSignUpClick={() => setIsSignUpModalOpen(true)} signedUpUser={signedUpUser} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Outlet />
        
      <div style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 100 }}>
        <AiOutlineUserAdd className="nav-icons" onClick={() => {
          console.log("Icon clicked");
          setIsSignUpModalOpen(true);
        }} />
      </div>

      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setIsSignUpModalOpen(false)}
        onSuccessfulSignUp={() => {
          setIsSignUpModalOpen(false);
          setIsLoggedIn(true); // Set isLoggedIn to true after successful sign up
        }}
        setSignedUpUser={setSignedUpUser}
      />
    </>
  );
}

export default App;
