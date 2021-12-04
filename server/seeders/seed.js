const db = require('../config/connection');
const { Post } = require('../models');
const postSeed = require('./postSeed.json');

db.once('open', async () => {
  await Post.deleteMany({});
  await Post.create(postSeed);

  console.log('all done!');
  process.exit(0);
});