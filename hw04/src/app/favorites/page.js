"use client";
import { useState, useEffect } from "react";
import PokemonCard from "@/components/Pokemon";
import pageStyles from "../page.module.css";
import { pages } from "next/dist/build/templates/app-page";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      const favoriteDetails = await Promise.all(
        storedFavorites.map(async (name) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          return response.ok ? await response.json() : null;
        })
      );
      setFavorites(favoriteDetails.filter(Boolean));
    };

    fetchFavorites();
  }, []);

  return (
    <main className={pageStyles.mainContent}>
      <div className={pageStyles.favoritesHolder}>
        <h2>Your Favorites</h2>
        <div className="favorites-container">
          {favorites.length > 0 ? (
            favorites.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                img={pokemon.sprites.front_default}
                name={pokemon.name}
                types={pokemon.types}
              />
            ))
          ) : (
            <p>No favorites added yet!</p>
          )}
        </div>
      </div>
    </main>
  );
}
