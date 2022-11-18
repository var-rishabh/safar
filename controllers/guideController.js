const axios = require('axios');

module.exports.getGuide = async (req, res) => {
    try {
        let states;
        states = await axios.get("https://api.jsonserve.com/rPpMIb")
        res.render('guide', { x: states.data });
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.bookGuide = async (req, res) => {
    try {
        const name = req.params.monumentName;
        res.render('bookGuide', { monument_name: name });
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}