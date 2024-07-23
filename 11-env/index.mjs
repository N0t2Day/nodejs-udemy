// import { config } from 'dotenv'
// console.log(config)
// config()

// console.log(process.env.DB_USERNAME)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_URL)

//Imports entire module including default export
// import * as dotenv from 'dotenv'
import { config } from 'dotenv'
config()

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)
