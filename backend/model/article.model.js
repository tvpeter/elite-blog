const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    bodyContent: {
        type: String,
        required: true,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
},
    {
        collection: 'articles'
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('articleSchema', articleSchema)