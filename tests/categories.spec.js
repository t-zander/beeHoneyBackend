const should= require('chai').should();
const Category = require('../mongodb/models/category');

describe('Testing categories controller', () => {

  beforeEach('Staging data', async () => {
    console.log('adds new category')
    const category = new Category({
      name: 'test category'
    });
    await category.save()
  })

  it('Gives all categories from DB', async () => {
    const categories = await Category.find({});
    categories.should.have.length(1);
  })
});
