import stream from 'stream'
import fs from 'fs'

// const filePath = './files/stdin-dump.txt'

// const writeStream = fs.createWriteStream(filePath)
// // to file
// process.stdin.pipe(writeStream)
// // to console
// process.stdin.pipe(process.stdout)

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase()
        cb(null, upperCased)
    },
})

const reverseStream = new stream.Transform({
    transform(chunk, encoding, cb) {
        const arraOfChars = chunk.toString().split('')
        const lastChar = arraOfChars.pop()
        const reversed = arraOfChars.reverse().concat(lastChar).join('')
        cb(null, reversed)
    },
})

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)
