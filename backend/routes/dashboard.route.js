const express = require("express");

const util = require("../utils/util");

let paidArticleSchema = require("../model/paidArticles.model");

const articleRoute = express.Router();

dashboardRoute.route("/get-paid-articles").get((req, res) => {
    const address = req.query.address
    paidArticleSchema.find({userLnAddress: address},(error, data) => {
       if(error) {
           return util.sendError(res, 400, error)
       } else {
           return util.sendSuccess(res, 200, data)
       }
   }
   );
})

dashboardRoute.route("/get-subscribed-users").get((req, res) => {
    const address = req.query.address
    paidArticleSchema.find({author: address}, (error, data) => {
        if(error) {
            return util.sendError(res, 400, error)
        } else {
            let subscriptionCount = data.length+=1
            return util.sendSuccess(res, 200, subscriptionCount)
       }
    })
});



dashboardRoute.route("/get-subscription-balance").get(async (req, res) => {
    const address = req.query.address
    paidArticleSchema.find({author: address}, (error, data) => {
        if(error) {
            return util.sendError(res, 400, error)
        } else {
            let subscriptionCount = data.length+=1
            let subscriptionTotal = subscriptionCount * 10
            return util.sendSuccess(res, 200, subscriptionTotal);
        }
    })
})

module.exports = dashboardRoute;