const {Post} = require('../models')

const resolvers = {
    Query: {
        getAllPosts: async () => {
            const posts = await Post.find()
            return posts
        },
    },
};