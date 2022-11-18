const { monuments } = require('../public/js/monuments')

module.exports.getMonuments = async (req, res) => {
    try {
        res.render('monuments', { text: "Delhi" });
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.getMonument = async (req, res) => {
    try {
        const { name, m } = req.body;
        // console.log(name, m);
        for (let key in m) {
            if (key == name) {
                console.log(m[key]);
            }
        }
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.bookMonument = async (req, res) => {
    try {
        const name = req.params.monumentName;
        res.render('book', { monument_name: name });
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}