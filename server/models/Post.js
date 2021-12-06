
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')




const PostSchema = new Schema({
  postDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
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