module.exports.getGuide = async (req, res) => {
    try {
        res.render('guide');
    } catch (err) {
        return res.status(400).json({
            status: 'failure',
            message: err.message,
            data: null
        });
    }
}