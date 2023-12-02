import { getPokemonById } from "../../src/js-foundation/06-async";

describe('js-foundation/06-async.ts', () => {
    test('getPokemonById should return a pokemon', async () => {
        const pokemonId = 1
        const pokemonName = await getPokemonById(pokemonId)
        expect(pokemonName).toBe('bulbasaur')
    })

    test('getPokemonById should return an error if pokemon does not exist', async () => {
        const pokemonId = 10000000000000000000000
        try {
            await getPokemonById(pokemonId)
            expect(true).toBeFalsy()
        } catch (error) {
            expect(error).toBe('Pokemon does not exist')
        }
    })
}) 