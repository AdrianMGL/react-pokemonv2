import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/CardPokeapi.css";

const Pokeapi = () => {
  const indexPokemon = "https://pokeapi.co/api/v2/pokemon/200/";

  const randomPokemon = Math.floor(Math.random() * indexPokemon.length);
  // console.log(randomPokemon);

  const [pokemon, setPokemon] = useState({});

  /** */
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/25/")
      .then((res) => setPokemon(res.data));
  }, []);

  // console.log(pokemon);

  /** onClick */

  const handleClickPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
      .then((res) => setPokemon(res.data));
  };

  return (
    <div className="card__container">
      <div className="card">
        <div className="card__header">
          <h5 className="card__id">
            Id <span> {pokemon.id}</span>
          </h5>
          <h5 className="card__hp">
            HP <span>{pokemon.stats?.[0].base_stat}</span>
          </h5>
        </div>
        <img
          src={pokemon.sprites?.other.home.front_default}
          alt={pokemon.name}
        />
        <h1 className="card__name-pokemon">{pokemon.name}</h1>
        <div className="card__content">
          <div className="card__basic-dates">
            <h3 className="card__type-pokemon">
              {" "}
              {pokemon.types?.[0].type.name}{" "}
            </h3>
            <h3 className="card__ability-pokemon">
              {pokemon.abilities?.[0].ability.name}
            </h3>
          </div>
          <div className="card__characteristics">
            <ul className="card__stats">
              <li>
                <h4>{pokemon.height}</h4>
                <h5>Height</h5>
              </li>
              <li>
                <h4>{pokemon.weight}</h4>
                <h5>Weight</h5>
              </li>
              <li>
                <h4>{pokemon.stats?.[1].base_stat}</h4>
                <h5>Attack</h5>
              </li>
              <li>
                <h4>{pokemon.stats?.[2].base_stat}</h4>
                <h5>Defense</h5>
              </li>
              <li>
                <h4>{pokemon.stats?.[5].base_stat}</h4>
                <h5>Speed</h5>
              </li>
            </ul>
          </div>
        </div>
        <button className="change" onClick={handleClickPokemon}>
          Change Pokemon
        </button>
      </div>
    </div>
  );
};

export default Pokeapi;
