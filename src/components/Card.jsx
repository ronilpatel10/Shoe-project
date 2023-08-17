// Card.jsx
import './Card.css';

import { useState } from "react";

import { useFavorites } from "./FavoritesContext"; 

const Card = ({ img, title, star, reviews, StockxPrice, StockxLink, GOAT_Price, GOATLink }) => {
  console.log(StockxLink);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [toggleFav, setToggleFav] = useState(isFavorite(title))

  function remove() {
    removeFromFavorites(title)
    setToggleFav(false)
  }

  function add() {
    addToFavorites({ img, title, star, reviews, StockxPrice, GOAT_Price, GOATLink});
    setToggleFav(true)
  }

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
            <a href={StockxLink} target="_blank" rel="noopener noreferrer"><p>{StockxPrice}</p></a>
            <a href={GOATLink} target="_blank" rel="noopener noreferrer"><p>{GOAT_Price}</p></a>             
              {toggleFav ? (
                <button onClick={remove}>
                  Remove From Favorites ❌
                </button>
              ) : (
                <button onClick={add}>
                  Add To Favorites ⭐️
                </button>
              )}
            </div>
            <div className="">
             
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
