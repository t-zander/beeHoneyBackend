const should= require('chai').should();
const Category = require('../mongodb/models/category');
const Admin = require('../mongodb/models/admin');

describe('Testing categories controller', () => {

  beforeEach('Staging data', async () => {
    await Category.deleteMany({})
    console.log('remove all categories');
    const category = new Category({
      name: 'test category'
    });
    await category.save()
  })

  it('Gives all categories from DB', async () => {
    const categories = await Category.find({});
    categories.should.have.length(1);
  })

  context('with admin permission', () => {
    beforeEach('CreateAdmin', async () => {
      await Admin.deleteMany({})
      const admin = await Admin.create({
        "email": "admin@gmail.com",
        "password": "secret"
      });
      
      console.log('ADMIN', admin)
    })
  })
});
