const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paidArticleSchema = new Schema({
    articleId: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
    },
    userLnAddress: {
        type: String,
        required: true,
        trim: true,
    },
    updated: {
        type: Date,
        default: Date.now
    },
},
    {
        collection: 'subscriptions'
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('paidArticleSchema', paidArticleSchema)