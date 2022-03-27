const express = require('express');
const app = express();
const articleRoute = express.Router();

let articleSchema = require('../model/article.model');

articleRoute.route('/').get((req, res) => {
    articleSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({
                status: true,
                message: 'All articles retrieved successfully',
                data: data,
            })
        }
    })
})

articleRoute.route('/create-article').post((req, res, next) => {
    articleSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({
                status: true,
                message: 'article created successfully',
                data: data,
            })
        }
    })
});


articleRoute.route('/get-article/:id').get((req, res) => {
    articleSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({
                status: true,
                message: 'article retreived successfully',
                data: data,
            })
        }
    })
})


articleRoute.route('/update-article/:id').put((req, res, next) => {
    articleSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json({
                status: true,
                message: 'article retreived successfully',
                data: data,
            })
        }
    })
})

articleRoute.route('/remove-article/:id').delete((req, res, next) => {
    articleSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                status: true,
                message: 'article deleted successfully',
                msg: data
            })
        }
    })
})

module.exports = articleRoute;