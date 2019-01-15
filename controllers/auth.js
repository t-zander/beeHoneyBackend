const User = require('../mongodb/models/user');
const Admin = require('../mongodb/models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
};

exports.signup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword
      });

      user
        .save()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    })
};

// admin part
exports.loginAsAdmin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Admin
    .findOne({email: email})
    .then(response => {
      if(!response) {
        return res.status(401).json({error: 'Wrong credentials'})
      }

      bcrypt
        .compare(password, response.password)
        .then(passwordsEqual => {
          if(!passwordsEqual){
            return res.status(401).json({error: 'Wrong credentials'})
          }

          const token = jwt.sign(
            {email: response.email, id: response._id},
            'fkjasklfjasklfjasjf;asf;asf',
            {expiresIn: '1h'}
          );

          res.status(200).json({token: token});
        })
    })
};