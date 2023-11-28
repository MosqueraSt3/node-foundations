const { buildMakePerson } = require('./js-foundation/05-factory')
const { getUUID, getAge } = require('./plugins')

const makePerson = buildMakePerson({ getUUID, getAge })

const obj = { name: 'Steven', birthDate: '2001-08-24' }

const person = makePerson(obj)

console.log(person)