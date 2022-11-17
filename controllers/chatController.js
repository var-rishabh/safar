module.exports.getChat = async (req, res) => {
    try {
        res.render("chat", {user : res.locals.currentUser});
    } catch (err) {
        return res.status(400).json({
			status: 'failure',
			message: err.message,
			data: null
		});
    }
}