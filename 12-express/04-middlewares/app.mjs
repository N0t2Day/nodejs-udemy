import express from 'express'
import logger from './middleware/logger.mjs'
import morgan from 'morgan'
// import qs from 'querystring'

const SERVER_PORT = 3000

const app = express()

// app.use(logger)
//log info
app.use(morgan('dev'))
//convert JSON to JS Object
app.use(express.json())
//convert Form Data to JS Object
app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = ''
//         req.on('data', (chunk) => {
//             data += chunk.toString()
//         })

//         req.on('end', () => {
//             const parsedFromData = qs.parse(data)
//             req.body = parsedFromData
//             next()
//         })
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     let data = ''
//     req.on('data', (chunk) => (data += chunk))
//     // req.on('end', () => console.log(JSON.parse(data)))
//     req.on('end', () => {
//         const parsedJSON = JSON.parse(data)
//         req.body = parsedJSON
//         next()
//     })
// })

app.use((req, res) => {
    console.log(req.body)
    return res.send('This is express server')
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is working on port ${SERVER_PORT}`)
})
