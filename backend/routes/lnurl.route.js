const lnurl = require('lnurl-pay');
const express = require('express');


const lnurlRoute = express.Router();

lnurlRoute.route('/').post((req, res) => {

    lnurl.requestPayServiceParams({lnUrlOrAddress:req.body.address})
        .then((result) => {
            res.json({
                status: true,
                message: 'address verified successfully',
                data: result,
            })

        })
        .catch((error) => {
            res.json({
                status: false,
                message: 'Invalid address',
                error: error.message,
            })
        })

});


module.exports = lnurlRoute;