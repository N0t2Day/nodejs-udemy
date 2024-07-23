const comments = require('./data')
const fs = require('fs')
const qs = require('querystring')

function getHomePage(req, res) {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/plain')
            res.end(`Server error ${err}`)
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        }
    })
}

function getHTML(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>Hello from the Node.JS</h1>')
    res.write('</div></body></html>')
    res.end()
}

function getTEXT(req, res) {
    res.statusCode = 300
    res.setHeader('Content-Type', 'text/plain')
    res.write('This is plain text')
    res.end()
}

function getComments(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(comments))
    res.end()
}

function pageNotFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Page not found</h1>')
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            try {
                const comment = qs.parse(body)
                comments.push(comment)
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.write('<h1>Comment data was received</h1>')
                res.write('<a href="/">Submit one more comment</a>')
                res.end()
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid Form')
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''
        req.on('data', (chunk) => {
            commentJSON += chunk
        })

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                res.end('Comment data was received')
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid JSON')
            }
        })
    } else {
        res.statusCode = 400
        res.end(
            `Data is not in JSON or as Form format ${req.headers['content-type']}`
        )
    }
}

module.exports = {
    getHTML,
    getTEXT,
    getComments,
    pageNotFound,
    postComment,
    getHomePage,
}