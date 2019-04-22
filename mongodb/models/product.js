const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {type: String, trim: true, required: true, unique: true, uniqueCaseInsensitive: true},
    price: {type: Number, required: true},
    description: {type: String},
    imageUrl: {type: String, required: true},
    discount: {type: Number},
    categoryId: {ref: 'category', type: Schema.Types.ObjectId, required: true}
  },
  {
    timestamps: true
  }
);
productSchema.plugin(uniqueValidator, { message: 'product name should be unique' });
module.exports = mongoose.model('product', productSchema, 'products');