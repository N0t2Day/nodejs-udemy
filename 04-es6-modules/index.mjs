// function printHello() {
//     console.log('Hello World')
// }

// function printHi() {
//     console.log('Hi')
// }

// export { printHello, printHi }
// OR
// export function printHello() {
//     console.log('Hello World')
// }

// export function printHi() {
//     console.log('Hi')
// }
import PLACEHOLDER_URL_POSTS from './constants.mjs'
import { season as newSeason, temperature } from './name-exports.mjs'
import { isRaining, humidity } from './inline-exports.mjs'
import getDataFromServer from './default-export.mjs'
import fs from 'node:fs/promises '

import BASE_URL, {
    USERNAME as BASE_USER_NAME,
    PASSWORD,
} from './mixed-exports.mjs'

// import myName from './default-export.mjs'
// import ownName from './default-export.mjs'
console.log(newSeason)
console.log(temperature)

console.log(isRaining)
console.log(humidity)

getDataFromServer(PLACEHOLDER_URL_POSTS + '/1')
    .then((post) => console.log(post))
    .catch((error) => console.log(error))

// console.log(ownName)

console.log(BASE_URL)
console.log(BASE_USER_NAME)
console.log(PASSWORD)
