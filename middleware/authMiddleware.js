const Admin = require('../mongodb/models/admin');
const jwt = require('jsonwebtoken');

exports.checkAuthToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, 'fkjasklfjasklfjasjf;asf;asf');
    req.currentUserId = decodedToken.id;
    next();
  } catch(error) {
    console.log(error)
    res.status(401).json({error: 'You should be logged in!'});
  }
};

exports.chekIfAdmin = (req, res, next) => {
  Admin
    .findById(req.currentUserId)
    .then(response => {
      if(!response) {
        res.status(401).json({error: 'Don\'t have permissions!'});
      } else{
        next();
      }
    })
};