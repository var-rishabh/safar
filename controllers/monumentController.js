module.exports.getMonuments = async (req, res) => {
    try {
        res.render("monuments");
    } catch (err) {
        return res.status(400).json({
			status: 'failure',
			message: err.message,
			data: null
		});
    }
}