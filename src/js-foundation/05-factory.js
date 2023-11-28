const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: getUUID(),
            name,
            birthDate,
            age: getAge(birthDate),
        }
    }
}

module.exports = {
    buildMakePerson,
}