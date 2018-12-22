const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongooseConnect = require('./mongodb/connection');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8000;

/* routes import */
const aboutUsRoutes = require('./routes/about');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

/* middleware */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

/* routes */
app.use('/api/about', aboutUsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);

/* errors handling */
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message 
  })
});

mongooseConnect.connectToMongoDb();
app.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});