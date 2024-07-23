function printHello() {
    console.log('Hello NodeJS')
}

module.exports.printHello = printHello

// module.exports.printHello = function printHello() {
//     console.log('Hello NodeJS')
// }

// module.exports.printHello = () => {
//     console.log('Hello NodeJS')
// }

// exports.printHello = () => {
//     console.log('Hello NodeJS')
// }

// For single export
// module.exports = () => {
//     console.log('Hello NodeJS')
// }
