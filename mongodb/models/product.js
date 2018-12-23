const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  price: {type: Number, required: true},
  name: {type: String, required: true},
  description: {type: String},
  imageUrl: {type: String},
  categoryId: {ref: 'category', type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('product', productSchema, 'products');