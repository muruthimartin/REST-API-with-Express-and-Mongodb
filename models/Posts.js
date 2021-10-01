const mongoose = require('mongoose')

//create a schema(skeleton) for your post
const PostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()

    }

    
});
//export a Post model(basically a class where you will instantiate all the posts)
module.exports = mongoose.model('Post', PostSchema)

