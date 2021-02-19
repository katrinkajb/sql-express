const { app } = require('../app.js');
const { cocktails } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should respond with the cocktails array', async done => {
    const expectation = {
        results: cocktails
    };

    const response = await request.get('/cocktails')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectation)
    done()
});

it('should respond with the specific cocktail by id', async done => {
    const expectation = {
        results: {
                id: 2,
                name: 'White Russian',
                description: 'A creamy vodka drink',
                category: 'creamy',
                price: 9,
                ingredients: 'Vodka, coffee liqueur, half and half',
            }
    };    
    const response = await request.get('/cocktails/2')
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectation)
    done()
  })