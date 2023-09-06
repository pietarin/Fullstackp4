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
  
      return { blogger: author, amountOfblogs }
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
  

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs
}