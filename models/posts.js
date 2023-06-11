const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    inputText: String,
    username: String,
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
  });


module.exports = mongoose.model('Posts',postSchema);