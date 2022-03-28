const lnurl = require('lnurl-pay');
const express = require('express');
const util = require('../utils/util');

let paymentSchema = require('../model/payments.model');


const paymentRoute = express.Router();


paymentRoute.route('/register').post((req, res) => {

    paymentSchema.create(req.body, (error, data) => {
        if (error) {
            return util.sendError(res, 400, error);
        } else {
            return util.sendSuccess(res, 201, data);
        }
    });
});


module.exports = paymentRoute;