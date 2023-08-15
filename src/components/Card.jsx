import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { useFavorites } from "./FavoritesContext"; 

const Card = ({ img, title, star, reviews, StockxPrice, GOAT_Price }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [toggleFav, setToggleFav] = useState(false)

  function remove(title) {
    removeFromFavorites(title)
    setToggleFav(false)
  }

  function add(title) {
    addToFavorites(title)
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
              <p>{StockxPrice}</p> {GOAT_Price}
              {toggleFav ? (
                <button onClick={() => remove(title)}>
                  Remove From Favorites ❤️
                </button>
              ) : (
                <button onClick={() => add(title)}>
                  Add To Favorites ⭐️
                </button>
              )}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
