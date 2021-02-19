const { app } = require('../app.js')
const { cocktails } = require('./data.js')
const supertest = require('supertest')
const request = supertest(app)

it('should respond with the cocktails array', async done => {
    const expectation = {
        results: cocktails
    };
    const response = await request.get('/cocktails')

    expect(response.status).toBe(200)
    expect(response.body.message).toEqual(expectation)
    done()
})

// it('should respond with the specific cocktail by id', async done => {
//     const expectation = {
//         results: 
//     };    
//     const response = await request.get('/test')
  
//     expect(response.status).toBe(200)
//     expect(response.body.message).toEqual(expectation)
//     done()
//   })