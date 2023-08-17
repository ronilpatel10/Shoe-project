import React from "react";
import Card from "./Card"; 
import { AiFillStar } from "react-icons/ai";
import { useFavorites } from "./FavoritesContext"; 
import Links from "./Links";
import './FavoritesPage.css';

function FavoritesPage() {
  const { favorites, removeFromFavorites, signedUpUser } = useFavorites();

  console.log(favorites)

  return (
    <div>
      <Links/>
       {signedUpUser && <div>Welcome, {signedUpUser}!</div>}
      <h1>Favorites Page ⭐️</h1>
      <div className="card-container">
        {favorites.map((shoe, index) => {
            if (!shoe || !shoe.img) {
                return null; 
            }
            return (
                <Card
                    key={shoe.id || index}
                    img={shoe.img}
                    title={shoe.title}
                    star={<AiFillStar className="rating-star" />}
                    reviews={shoe.reviews}
                    StockxPrice={shoe.StockxPrice}
                    GOAT_Price={shoe.GOAT_Price}
                    isFavorite={true}
                    onFavoriteClick={() => removeFromFavorites(shoe.id)}
                />
            );
        })}
      </div>
    </div>
  );
}

export default FavoritesPage;
