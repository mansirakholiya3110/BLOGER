// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const Joi = require('joi');
const blogValidator = require('../validators/blogValidator');
const Blog = require('../models/blogModel');

router.get('/', blogController.viewAllBlogs);
router.get('/search', blogController.searchBlog);
router.get('/paginate', blogController.paginateBlogs);

// Insert blog data
router.post('/', async (req, res) => {
    const { error } = blogValidator.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { category, title, blogger_name, image, description } = req.body;

    const newBlog = new Blog({
        category,
        title,
        blogger_name,
        image,
        description,
    });
console.log(newBlog);
    try {
        await newBlog.save();
        res.status(201).send('Blog created successfully');
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
