"use client";
import usePokemonApi from "@/hooks/usePokemonApi";
import { useEffect } from "react";
import homeStyles from "./page.module.css";
import PokemonCard from "@/components/Pokemon";

export default function Home() {
  const pokeData = usePokemonApi();

  useEffect(() => {
    if (pokeData.totalPokemonCount === 0) {
      pokeData.getNumberOfPokemon();
    }
    if (!pokeData.randomPokemon.length) {
      pokeData.getRandomPokemon(3);
    }
  }, [pokeData]);

  const randomPokemonListJsx = pokeData.randomPokemon.map(function (pokemon) {
    const quickInfo = pokeData.getPokemonQuickInfo(pokemon);
    return (
      <PokemonCard
        key={`poke-card-${quickInfo.id}`}
        name={quickInfo.name}
        img={quickInfo.img}
        types={quickInfo.types}
      />
    );
  });

  return (
    <main className={homeStyles.mainContent}>
      <h1>POKEMON SHOWCASE</h1>
      <section>{randomPokemonListJsx}</section>
    </main>
  );
}
