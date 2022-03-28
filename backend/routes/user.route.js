const lnurl = require('lnurl-pay');
const express = require('express');
const util = require('../utils/util');

let articleSchema = require('../model/article.model');


const userRoute = express.Router();


userRoute.route('/articles').get((req, res) => {

    articleSchema.find({ author: req.query.address }, (error, data) => {
        if (error) {
            return util.sendError(res, 400, error);
        } else {
            //check if it's owner or payment has been made
            const address = req.query.address;
            if (data.author === address) {
                return util.sendSuccess(res, 200, data);
            }

        }
    })
   
});


module.exports = userRoute;