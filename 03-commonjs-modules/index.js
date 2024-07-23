// console.log(require.extensions)
// console.log(exports === module.exports)
// console.log(__filename)
// console.log(__dirname)
// console.log(module)

// const usersArray = require('./users')
// console.log(usersArray)

// // const { URL, USERNAME, PASSWORD } = require('./constants')
// OR
// const constants = require('./constants')

// // console.log(URL)
// // console.log(USERNAME)
// // console.log(PASSWORD)
// console.log(constants.URL)
// console.log(constants.USERNAME)
// console.log(constants.PASSWORD)

// const getData = require('./utils')

// getData('https://jsonplaceholder.typicode.com/posts')
//     .then((posts) => console.log(posts))
//     .catch((error) => console.log(error))

// const exportedObject = require('./multiple-exports')

const { myName, myHobbies, myAge } = require('./multiple-exports')
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import')
const greetingFn = require('../my-modules/single-exports')
// OR
// const { myName, myHobbies, myAge } = require('./multiple-exports')
// console.log(exportedObject)

greetingFn(myName)
console.log(greetingFn)

console.log('')
console.log(myName)
console.log(myHobbies)

myHobbies.push('boxing')

console.log(myAge)
console.log('')
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)

// COMON_JS EXPORT / IMPORT
