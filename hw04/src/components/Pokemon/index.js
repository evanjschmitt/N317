"use client";
import pokemonStyles from "./pokemon.module.css";

export default function PokemonCard({ img = "", name = "", types = [] }) {
  const typesJsx = types
    .map(function (typeObj) {
      return typeObj.type.name;
    })
    .join(", ");
  return (
    <div className={pokemonStyles.pokeCard}>
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <p>
          <i>Type(s): {typesJsx}</i>
        </p>
      </div>
    </div>
  );
}
