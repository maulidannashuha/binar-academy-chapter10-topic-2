const userModel = require('../models/userModel')

const profile = async (req, res) => {
    const data = await userModel.findOne()

    res.status(200).json({
        name: data.name
    })
}

module.exports = {
    profile
}