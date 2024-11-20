// validators/blogValidator.js
const Joi = require('joi');

const blogSchema = Joi.object({
    category: Joi.string().valid('Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Science').required(),
    title: Joi.string().required(),
    blogger_name: Joi.string().required().valid('Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Science'),
    image: Joi.string().uri().required(),
    description: Joi.string().required(),
});

module.exports = blogSchema;
