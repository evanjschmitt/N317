"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar/page.js";

export default function Search() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = async (filters) => {
    const { name, habitat, eggGroup } = filters;
    let results = [];

    try {
      // Fetch a large set of Pokémon and filter by name if it is provided
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

      // Fetch by habitat
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

      // Fetch by egg group
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

      // Update the state with the final filtered results
      setPokemonList(results);
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
            {typeof pokemon === "string" ? pokemon : pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
