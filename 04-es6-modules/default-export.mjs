// const myName = 'Artem'

// export default myName

async function getData(url) {
    console.log('Get url', url)
    const res = await fetch(url)
    const posts = await res.json()
    return posts
}

export default getData
