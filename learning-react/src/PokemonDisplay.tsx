import type {PokemonType} from "./pokemonApiService";

export function PokemonDisplay({pokemon}:{pokemon:PokemonType}){
    return <div>{pokemon.species.name}</div>;
}