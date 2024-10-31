"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import PokemonCard from "@/components/Pokemon";

export default function Search() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = async (filters) => {
    const { name, habitat, eggGroup } = filters;
    let results = [];

    try {
      // Step 1: Fetch a large list of Pokémon and filter by name if provided
      if (name) {
        const nameResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const nameData = await nameResponse.json();
        const nameFilteredResults = nameData.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(name.toLowerCase())
        );
        results = nameFilteredResults;
      }

      // Step 2: Fetch by habitat
      if (habitat) {
        const habitatResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`
        );
        if (habitatResponse.ok) {
          const habitatData = await habitatResponse.json();
          const habitatResults = habitatData.pokemon_species.map((p) => p.name);
          results = results.length
            ? results.filter((p) => habitatResults.includes(p.name))
            : habitatResults.map((name) => ({ name }));
        }
      }

      // Step 3: Fetch by egg group
      if (eggGroup) {
        const eggGroupResponse = await fetch(
          `https://pokeapi.co/api/v2/egg-group/${eggGroup}`
        );
        if (eggGroupResponse.ok) {
          const eggGroupData = await eggGroupResponse.json();
          const eggGroupResults = eggGroupData.pokemon_species.map(
            (p) => p.name
          );
          results = results.length
            ? results.filter((p) => eggGroupResults.includes(p.name))
            : eggGroupResults.map((name) => ({ name }));
        }
      }

      // Step 4: Fetch detailed data for each Pokémon result
      const detailedResults = await Promise.all(
        results.map(async (pokemon) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          if (response.ok) {
            const detailedData = await response.json();
            return {
              name: detailedData.name,
              sprites: detailedData.sprites,
              types: detailedData.types,
            };
          }
          return null;
        })
      );

      // Filter out any null values (e.g., if a fetch failed)
      setPokemonList(detailedResults.filter((data) => data !== null));
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard
              img={pokemon.sprites?.front_default}
              name={pokemon.name}
              types={pokemon.types || []}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
