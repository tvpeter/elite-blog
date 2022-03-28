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
                return util.sendSuccess(res, 200, data);
        }
    })
   
});


module.exports = userRoute;