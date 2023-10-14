const baseController = require('../../../controllers/baseController')
const {mockRequest, mockResponse} = require('../../testingUtils')

test('res.json should return a JSON object with hello message', function(done){
    const req = mockRequest()
    const res = mockResponse()

    baseController.hello(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        status: true,
        message: 'Hello world'
    })
    done()
})

test('sum res.json should return a JSON object with result a + b', function(done){
    const req = mockRequest({
        a: 10,
        b: 9
    })
    const res = mockResponse()

    baseController.sum(req, res)

    const {a, b} = req.body

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        result: a+b
    })
    done()
})