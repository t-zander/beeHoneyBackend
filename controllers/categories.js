const Category = require('../mongodb/models/category');


class CategoriesController {
  static getAll(req, res) {
    Category
      .find()
      .then( response => {
        res.status(200).json(response)
      })
      .catch( error => {
        res.status(500).json(error)
      })
  }

  static addOne(req, res) {
    const category = new Category({
      name: req.body.name
    });

    category.save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }

  static removeOne(req, res) {
    const categoryId = req.params.categoryId;
    
    Category
      .findByIdAndDelete(categoryId)
      .then(response => {
        res.status(200).send({message: `Successfully deleted category "${response.name}"`})
      })
      .catch(error => {
        res.status(500).send({error: error})
      })
  }

  static updateOne(req, res) {
    const categoryId = req.params.categoryId;
  
    Category.findOneAndUpdate({_id: categoryId}, req.body,  {new: true})
      .then(response => {
        res.status(201).json(response)
      })
      .catch(error => {
        res.status(500).send({error: error})
      })
  }
}

module.exports = CategoriesController;