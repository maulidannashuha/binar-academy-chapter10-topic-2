const hello = (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Hello world'
    })
}

const sum = (req, res) => {
    const {a, b} = req.body

    res.status(200).json({
        result : a + b
    })
}

module.exports = {
    hello, sum
}