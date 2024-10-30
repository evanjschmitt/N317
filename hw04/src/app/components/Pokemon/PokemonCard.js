"use client";
import pokemonStyles from "./pokemon.module.css";
export default function PokemonCard([img = "", name = "", type = ""]) {
    return (
        <div style={"pokemonStyles.pokeCard"}>
            <img src="#"/>
        
        <div>
            <h4>Meowth</h4>
            <p>
                <i>Types: Normal</i>
            </p>
        </div>
        </div>
    )
}