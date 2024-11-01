"use client";
import pokemonStyles from "./pokemon.module.css";
import { useState, useEffect } from "react";

export default function PokemonCard({ img = "", name = "", types = [] }) {
  const typesJsx = types.map((typeObj) => typeObj.type.name).join(", ");

  // Set up local state for favorited status
  const [isFavorited, setIsFavorited] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorited(storedFavorites.includes(name));
  }, [name]);

  // Toggle favorite status and store in localStorage
  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorited
      ? storedFavorites.filter((fav) => fav !== name)
      : [...storedFavorites, name];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={pokemonStyles.pokeCard}>
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>
          <i>Type(s): {typesJsx}</i>
        </p>
        <button onClick={toggleFavorite}>
          {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
