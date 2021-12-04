const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  postDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
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

const Post = mongoose.model('post', PostSchema);

module.exports = Post;