const Category = require('../mongodb/models/category');
const Admin = require('../mongodb/models/admin');

exports.getAll = (req, res) => {
  Category
    .find()
    .then( response => {
      res.status(200).json(response)
    })
    .catch( error => {
      res.status(500).json(error)
    })
};

exports.addOne = (req, res) => {

  Admin
    .findById(req.currentUserId)
    .then(response => {
      if(!response) {
        res.status(401).json({error: 'Don\'t have admin permissions!'})
      }

      const category = new Category({
        name: req.body.name
      });

      return category
        .save()
    })
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    })
};

exports.removeOne = (req, res) => {
  const categoryId = req.params.categoryId;

  console.log(categoryId)
  Admin
    .findById(req.currentUserId)
    .then(response => {
      if(!response) {
        res.status(401).json({error: 'Don\'t have admin permissions!'})
      }

      Category
        .findByIdAndDelete(categoryId)
        .then((response) => {
          res.status(200).send({message: `Successfully deleted category "${response.name}"`})
        })
        .catch(error => {
          res.status(200).send({error: error})
        })
    })
}