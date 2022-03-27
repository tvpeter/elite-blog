const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv');

let articleSchema = require('../model/article.model');

dotenv.config();
const articleRoute = express.Router();

const imageUpload = multer({
    dest: 'images',
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
});


articleRoute.route('/').get((req, res) => {
    articleSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({
                status: true,
                message: 'All articles retrieved successfully',
                data,
            })
        }
    })
})

articleRoute.route('/create-article').post(imageUpload.single('image'), (req, res, next) => {

    cloudinary.uploader.upload(req.file.path, { folder: 'elite/', format: 'png' })
        .then((result) => {
            req.body.image = result.public_id;
            articleSchema.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json({
                        status: true,
                        message: 'article created successfully',
                        data,
                    })
                }
            })
        }).catch((error) => {
            console.log(error);
        });
});


articleRoute.route('/get-article/:id').get((req, res) => {
    articleSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json({
                status: true,
                message: 'article retreived successfully',
                data,
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