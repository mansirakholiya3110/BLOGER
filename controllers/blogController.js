// controllers/blogController.js
const Blog = require('../models/blogModel');


// View All Blogs
exports.viewAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// Search Blog by Title
exports.searchBlog = async (req, res) => {
    const title = req.query.title;
    try {
        const blogs = await Blog.find({ title: { $regex: title, $options: 'i' } });
        res.json(blogs);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// Paginate Blogs
exports.paginateBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const blogs = await Blog.find()
            .skip((page - 1) * limit)
            .limit(limit);
        const totalBlogs = await Blog.countDocuments();
        res.json({
            blogs,
            totalPages: Math.ceil(totalBlogs / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// controllers/blogController.js
exports.paginateBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const blogs = await Blog.find()
            .skip((page - 1) * limit)
            .limit(limit);
        const totalBlogs = await Blog.countDocuments();
        res.json({
            blogs,
            totalPages: Math.ceil(totalBlogs / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};
