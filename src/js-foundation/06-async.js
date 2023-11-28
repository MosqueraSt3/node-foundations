const { httpClientPlugin } = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
    try {
        const pokemon = await httpClientPlugin.get(url)

        return pokemon.name
    } catch (err) {
        console.log(err);
        throw new Error('Pokemon does not exist')        
    }
}

module.exports = {
    getPokemonById,
}