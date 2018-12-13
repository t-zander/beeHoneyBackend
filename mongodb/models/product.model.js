const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {type: String, required: true, trim: true},
  price: {type: String, required: true, trim: true}
})

module.exports = mongoose.model('product', productSchema, 'goods');