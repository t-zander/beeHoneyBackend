const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: {type: String, trim: true, required: true, unique: true, uniqueCaseInsensitive: true}
})

categorySchema.plugin(uniqueValidator, { message: 'category name should be unique' });
module.exports = mongoose.model('category', categorySchema, 'categories');