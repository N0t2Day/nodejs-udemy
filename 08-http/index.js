const http = require('http')
const {
    getHTML,
    getTEXT,
    getComments,
    pageNotFound,
    postComment,
    getHomePage,
} = require('./functions')

const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        return getHomePage(req, res)
    }

    if (req.url === '/html' && req.method === 'GET') {
        return getHTML(req, res)
    }

    if (req.url === '/text' && req.method === 'GET') {
        return getTEXT(req, res)
    }

    if (req.url === '/comments' && req.method === 'GET') {
        return getComments(req, res)
    }

    if (req.url === '/comments' && req.method === 'POST') {
        return postComment(req, res)
    }

    pageNotFound(req, res)
})

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`)
})
