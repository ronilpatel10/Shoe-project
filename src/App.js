import { useState } from "react";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import products from "./data";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

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
      ({ img, title, star, reviews, StockxPrice, GOAT_Price }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          StockxPrice={StockxPrice}
          GOAT_Price={GOAT_Price}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;