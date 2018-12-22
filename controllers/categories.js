const Category = require('../mongodb/models/category');

exports.getAll = (req, res) => {
  Category
    .find()
    .then( response => {
      res.status(200).json(response)
    })
    .catch( error => {
      res.status(500).json(error)
    })
}

exports.addOne = (req, res) => {

  const category = new Category({
    name: req.body.name
  });

  category
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    })
}