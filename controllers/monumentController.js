module.exports.bookMonuments = async (req, res) => {
    try {
        console.log(req.body.cities_list);
        res.render('monuments', { data: "none"});
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}

module.exports.getMonuments = async (req, res) => {
    try {
        res.render('monuments', { data: "No Monument Found." });
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