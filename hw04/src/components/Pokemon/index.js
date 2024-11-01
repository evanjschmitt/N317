"use client";
import Link from "next/link";
import pokemonStyles from "./pokemon.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PokemonCard({ img = "", name = "", types = [] }) {
  const typesJsx = types.map((typeObj) => typeObj.type.name).join(", ");

  //My favorites code was helped GREATLY by ChatGPT, escpecially for bug fixing.
  const [isFavorited, setIsFavorited] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorited(storedFavorites.includes(name));
  }, [name]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorited
      ? storedFavorites.filter((fav) => fav !== name)
      : [...storedFavorites, name];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  const router = useRouter();
  const { pokemonName } = router.query || {};
  const viewDetails = () => {
    router.push(`/${name}`);
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
        <button onClick={viewDetails}>View Details</button>
      </div>
    </div>
  );
}
