const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    postId:[{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    }]
  });


module.exports = mongoose.model('Users',userSchema);