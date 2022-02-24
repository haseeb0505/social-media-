const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: [],
    }

},
    { timestamps: true })
// first parameter is collection name and 2nd parameter is file to export 
module.exports = mongoose.model("Post", PostSchema);