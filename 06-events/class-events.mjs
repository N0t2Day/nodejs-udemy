import EventEmitte from 'events'

class Post extends EventEmitte {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0

        this.on('likePost', (username) => {
            console.log(`${username} liked your post`)
        })

        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('User name is required for like')
            )
        }
        this.likesQty += 1
        this.emit('likePost', username)
    }

    postInfo() {
        console.log(this.author)
        console.log(this.text)
        console.log(this.likesQty)
    }
}

const myPost = new Post('Artem', 'New post')

// myPost.postInfo()
setTimeout(() => {
    myPost.like('Khrystyna')
}, 2000)

setTimeout(() => {
    myPost.like()
}, 3000)
// myPost.postInfo()
