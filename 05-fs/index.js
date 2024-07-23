const fs = require('fs/promises')
const fileName = './first.txt'
const promiseFile = './promiseFile.txt'
//REDO with promises
// fs.writeFile(fileName, 'First file text', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('File first.text was written')
//         fs.appendFile(fileName, '\nOne more line', (error) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log('Appended to first.text file')
//                 fs.rename(fileName, './renamed-from-first.txt', (error) => {
//                     if (error) {
//                         console.log(`Rename error ${error}`)
//                     } else {
//                         console.log('Renamed OK')
//                     }
//                 })
//             }
//         })
//     }
// })

fs.writeFile(promiseFile, 'My Promise file func')
    .then(() => fs.appendFile(promiseFile, '\n'))
    .then(() => fs.appendFile(promiseFile, 'Appended to promise file'))
    .then(() => fs.rename(promiseFile, './renamed-from-promise.txt'))
    .catch((error) => console.log(error))

setTimeout(() => {
    fs.unlink('./renamed-from-promise.txt')
        .then(() => console.log(`Deleted file ${promiseFile}`))
        .catch((error) => console.log(error))
}, 2000)
