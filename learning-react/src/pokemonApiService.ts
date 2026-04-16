export interface PokemonType {
    species: {
        name: string,
        url: string
    },
    sprites: {
        front_default: string
    },
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[]
}

export const getPokemon = async (pokemonName: string): Promise<PokemonType> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const response = await fetch(url)
    return await response.json()
}