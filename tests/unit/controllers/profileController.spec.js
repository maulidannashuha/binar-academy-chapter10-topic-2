const profileController = require('../../../controllers/profileController')
const {mockRequest, mockResponse} = require('../../testingUtils')

test('profile should return a user object', async function(){
    const req = mockRequest()
    const res = mockResponse()

    await profileController.profile(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        name: 'John Doe',
    })
})