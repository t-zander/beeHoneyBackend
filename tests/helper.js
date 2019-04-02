const mongoose = require('mongoose');
const uri = 'mongodb+srv://t-zander:aAQDKyYeAgw5czJb@cluster0-hmrg2.mongodb.net/beeHoneyShop?retryWrites=true';
const Category = require('../mongodb/models/category');

mongoose
  .connect(uri, {useNewUrlParser: true})
  .then( _ => {
    console.log('connected to mongo db')
  })
  .catch( error => {
    console.log('unable to connect to mongo db', error);
  });

/* beforeEach('Clears database', (done) => {
  Category.deleteMany({})
    .then(_ => {
      console.log('clears database')
      done();
    })
}); */
