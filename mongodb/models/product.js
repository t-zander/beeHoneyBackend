const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String},
  imageUrl: {type: String},
  discount: {type: Number},
  categoryId: {ref: 'category', type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('product', productSchema, 'products');