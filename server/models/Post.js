

const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  postDate: {
    type: Date,
    default: Date.now
  },
  title: 
    {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
  },
  category: {
    type: String,
    required: true,
  }

});

const Post = model('Post', PostSchema);

module.exports = Post;