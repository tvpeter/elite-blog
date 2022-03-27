const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    bodyContent: {
        type: String,
        required: true,
    },
    
}, {
    collection: 'articles'
})

module.exports = mongoose.model('articleSchema', articleSchema)