import { httpClientPlugin } from "../../src/plugins"

describe('plugins/http-client.plugin.ts', () => {
    test('httpClientPlugin.get() should return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        })
    })
})