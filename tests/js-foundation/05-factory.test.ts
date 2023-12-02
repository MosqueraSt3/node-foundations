import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.ts', () => {
    const getUUID = () => '1234'
    const getAge = () => 22
    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge })
        expect(typeof makePerson).toBe('function')
    })

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getUUID, getAge })
        const person = makePerson({ name: 'Steven', birthDate: '2001-08-24' })
        expect(person).toEqual({
            id: '1234',
            name: 'Steven',
            birthDate: '2001-08-24',
            age: 22,
        })
    })
})
