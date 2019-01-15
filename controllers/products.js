const Product = require('../mongodb/models/product');

exports.getAll = (req, res) => {
  Product
    .find()
    .then( response => {
      res.status(200).json(response)
    })
    .catch( error => {
      res.status(500).json(error)
    })
};

exports.getByCategory = (req, res) => {
  const categoryId = req.params.categoryId;

  Product
    .find({categoryId: categoryId})
    .then( response => {
      res.status(200).json(response);
    })
    .catch( error => {
      res.status(500).json(error);
    })
};

/*for admin only*/
exports.addOne = (req, res) => {
  const product = new Product({
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId
  });
  
  /* check that there is no product with the same name */
  Product
    .findOne({name: req.body.name})
    .then(response => {
      if(response) {
        return res.status(409).json({error: 'Product with this name already exists'})
      }
      product
        .save()
        .then(response => {
          res.status(201).json(response);
        })
    })
    .catch(error => {
      res.status(500).json(error);
    })

};

exports.deleteOne = (req, res) => {

};

exports.updateOne = (req, res) => {

};