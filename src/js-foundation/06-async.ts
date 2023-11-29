import { httpClientPlugin } from '../plugins'

export const getPokemonById = async (id: string|number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
    try {
        const pokemon = await httpClientPlugin.get(url)

        return pokemon.name
    } catch (err) {
        throw new Error('Pokemon does not exist')        
    }
}