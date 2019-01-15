const mongoose = require('mongoose');
const uri = 'mongodb+srv://t-zander:ynVTQWHCkjv7MrOU@bee-honey-mn8g0.mongodb.net/beeHoneyShop?retryWrites=true';

exports.connectToMongoDb = () => {
  mongoose.connect(
    uri,
    {useNewUrlParser: true},
    )
    .then( _ => {
      console.log('successfully connected to mongo db');
    })
    .catch( error => {
      console.log('unable to connect to mongo db', error);
    });
};