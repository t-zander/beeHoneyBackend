const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, 'fkjasklfjasklfjasjf;asf;asf');
    req.currentUserId = decodedToken.id;
    next();
  } catch(error) {
    res.status(401).json({error: 'You are not authenticated'})
  }
};