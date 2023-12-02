import { getAge } from "../../src/plugins";


describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person ', () => {
        const birthDate = '2001-08-24'
        const age = getAge(birthDate)
        const calculateAge = new Date().getFullYear() - new Date(birthDate).getFullYear()
        
        expect(typeof age).toBe('number')
        expect(age).toBe(calculateAge)
    })

})