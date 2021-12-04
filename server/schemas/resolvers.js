const { Post } = require('../models');

const resolvers = {
  Query: {
    posts: async () => {
      return Post.find();
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addPost: async (parent, { title, description, category }) => {
      return Post.create({title, description, category});
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
  },
};

module.exports = resolvers;
