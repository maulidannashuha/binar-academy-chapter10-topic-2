const request = require('supertest')
const app = require('../../app')

test('access / and return 200 with json', (done) => {
    request(app).get('/').then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('message')
        expect(res.body.message).toEqual('Hello world')

        done()
    })
})

test('access /sum and return 200 with json', (done) => {
    request(app).post('/sum')
    .send({
        a: 10, b: 20
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    // .expect('Content-Type', 'application/json')
    .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('result')
        expect(res.body.result).toEqual(30)

        done()
    })
})

// buat sebuah endpoint untuk data profile
// {name: 'john'}

// test('access /profile and return 200 with json', (done) => {
//     request(app).get('/profile')
//     .then(res => {
//         expect(res.statusCode).toBe(200)
//         expect(res.body).toHaveProperty('name')
//         expect(res.body.name).toEqual('john')

//         done()
//     })
// })