import React from "react";
import Card from "../components/Card"; 
import { AiFillStar } from "react-icons/ai";
import { useFavorites } from "./FavoritesContext"; 
function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  console.log(favorites)

  return (
    <div>
      <h1>Favorites Page</h1>
      <div className="card-container">
        {favorites.map((shoe) => (
          <Card
            key={shoe.id} 
            img={shoe.img}
            title={shoe.title}
            star={<AiFillStar className="rating-star" />}
            reviews={shoe.reviews}
            StockxPrice={shoe.StockxPrice}
            GOAT_Price={shoe.GOAT_Price}
            isFavorite={true}
            onFavoriteClick={() => removeFavorite(shoe.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
