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

module.exports = {
    dummy, totalLikes, favoriteBlog
}