const Product = require('../mongodb/models/product');
const fs = require('fs');
const path = require('path');

class ProductsController {
  static getAll(req, res) {
    Product
      .find()
      .sort({date: 'asc'})
      .then( response => {
        res.status(200).json(response)
      })
      .catch( error => {
        res.status(500).json(error)
      })
  }

  static getById(req, res) {
    const productId = req.params.productId;
  
    Product
      .findById(productId)
      .then( product => {
        res.status(200).json(product);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }

  static getByCategory(req, res) {
    const categoryId = req.params.categoryId;
  
    Product
      .find({categoryId: categoryId})
      .then( response => {
        res.status(200).json(response);
      })
      .catch( error => {
        res.status(500).json(error);
      })
  }

  /* admin only */
  static addOne(req, res) {
    console.log(req.body, req.file);

    if(req.fileFormatError) {
      return res.status(500).json({error: 'This file type is not allowed!'})
    }
    if(!req.file) {
      return res.status(500).json({error: 'Image is a required field!'})
    }
    const product = new Product({...req.body, ...{imageUrl: path.normalize(req.file.path)}});
    product
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(error => {
        try {
          fs.unlinkSync(req.file.path);
          console.log(`deleted ${req.file.originalname} as product.save returned an error`);
        } catch (err) {
          console.log('cannot remove image from public/images', err);
        }
        res.status(500).json(error);
      })
  }

  static deleteOne(req, res) {
    const productId = req.params.productId;
    Product
      .findByIdAndDelete(productId)
      .then(response => {
        res.status(200).send({message: `Successfully deleted product "${response.name}"`})
      })
      .catch(error => {
        res.status(500).send({error: error})
      })
  }
  
  static updateOne(req, res) {
    const productId = req.params.productId;
  
    Product
      .findOneAndUpdate({_id: productId}, req.body)
      .then(updatedProduct => {
        res.status(200).json(updatedProduct);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }
}

module.exports = ProductsController;