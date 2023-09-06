const dummy = () => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }
    return blogs.length === 0
        ? 0
        : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const mostLikes = blogs.reduce((max, blog) =>
        blog.likes > max ? blog.likes : max, 0)
    return blogs.find(blog => blog.likes === mostLikes)
}

const mostBlogs = (blogs) => {
    const authors = []

    blogs.forEach(blog => {
        if (!authors.includes(blog.author)) {
            authors.push(blog.author)
        }
    })

    const authorsBlogs = authors.map(author => {
        let amountOfblogs = 0
        blogs.forEach(blog => {
            if (blog.author === author) {
                amountOfblogs++
            }
        })

        return { author: author, amountOfblogs }
    })

    let mostBlogsAuthor = authorsBlogs[0]
    authorsBlogs.forEach(author => {
        if (author.amountOfblogs > mostBlogsAuthor.amountOfblogs) {
            mostBlogsAuthor = author
        }
    })

    return {
        author: mostBlogsAuthor.author,
        blogs: mostBlogsAuthor.amountOfblogs
    }
}

const mostLikes = (blogs) => {
    let authors = []

    blogs.forEach(blog => {
        if (!authors.includes(blog.author)) {
            authors.push(blog.author)
        }
    })

    let authorsLikes = authors.map(author => {
        let amountOfLikes = 0
        blogs.forEach(blog => {
            if (blog.author === author) {
                amountOfLikes + blog.likes
            }
        })
        return { author: author, amountOfLikes }
    })

    let mostLikesAuthor = authorsLikes[0]
    authorsLikes.forEach(author => {
        if (author.amountOfblogs > mostLikesAuthor.amountOfLikes) {
            mostLikesAuthor = author
        }
    })

    return {
        author: mostLikesAuthor.author,
        likes: mostLikesAuthor.amountOfblogs
    }
}


module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}