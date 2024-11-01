"use client";
import { useEffect, useState } from "react";

export default function PokemonDetail({ params }) {
  const { pokemonName } = params; // Access `pokemonName` directly from `params`
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemonName) {
      const fetchPokemonData = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          if (!response.ok) throw new Error("Failed to fetch Pokémon data");

          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Stop loading after fetch completes or fails
        }
      };

      fetchPokemonData();
    }
  }, [pokemonName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pokemonData) {
    return <p>Pokémon not found.</p>;
  }

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Height: {pokemonData.height} CM</p>
      <p>Weight: {pokemonData.weight} KG</p>
      <p>Types: {pokemonData.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
}
