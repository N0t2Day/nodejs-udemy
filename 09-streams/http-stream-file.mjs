import http from 'http'
import fs from 'fs'

const serverPort = 3000
const filePath = './files/index.html'

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath)
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        readStream.pipe(res)
    }

    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('Error while reading file on server')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
})

server.listen(serverPort, () => {
    console.log(`Server is listening at port ${serverPort}`)
})
