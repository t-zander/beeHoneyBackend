const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/shop';

exports.connectToMongoDb = () => {
  mongoose.connect(
    uri,
    {useNewUrlParser: true},
    (err) => {
      if(err){
        console.log('unable to connect to mongo db', err);
      }
    }
  );
}