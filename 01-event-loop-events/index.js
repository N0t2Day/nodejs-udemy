const fs = require('fs')
const dns = require('dns')
const { time } = require('console')

function info(text) {
    console.log(text, performance.now().toFixed(2))
}

console.log('Programm start')

// Close events
fs.writeFile('./test.txt', 'Hello NodeJS', () => info('File written'))

//Promises
Promise.resolve().then(() => info('Promise 1'))

//Next tick
process.nextTick(() => info('Next tick 1'))

//Set immediate (Check)
setImmediate(() => info('Immediate 1'))

// Timeouts
setTimeout(() => info('Timeout 1'), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 100)

// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`)
    if (intervalCount === 2) {
        clearInterval(intervalId)
    }
}, 50)

//I/O Events
dns.lookup('localhost', (error, address, family) => {
    info('DNS 1 localhost', address)
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Programm end')
