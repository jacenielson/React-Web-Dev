import { useState } from 'react'
import './App.css'
import { ReverseText } from './ReverseText'
import { getPokemon, type PokemonType } from './pokemonApiService.ts'
import { PokemonDisplay } from './PokemonDisplay.tsx';

export function App() {
  const [count, setCount] = useState(67);
  const [userInput, setUserInput] = useState("start");
  const [pokemon, setPokemon] = useState<PokemonType | undefined>();

  return (
    <>

    {
      pokemon && <div>{pokemon.species.name}</div>
    }
      <button
        className="counter"
        onClick={() => setCount(15)}
      >
        Count is {count}
      </button>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <ReverseText theText={userInput}></ReverseText>
      <ReverseText theText={userInput + userInput}></ReverseText>

      <button onClick = {async () => {
        const apiPokemon = await getPokemon(userInput);
        console.log(apiPokemon);
        setPokemon(apiPokemon);
      }}>Load a Pokemon</button>
      {
      pokemon && <PokemonDisplay pokemon={pokemon}></PokemonDisplay>
      }
    </>
  )
}


