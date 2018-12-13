const About = require('../mongodb/models/about');

exports.getInfo = (req, res) => {
  About
    .find({name: 'about'})
    .exec()
    .then(collection => {
      res.json(collection[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}