const express = require('express');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const colors = require('colors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", async (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            message: 'APIs running successfully',
            data: null
        });
    } catch (err) {
        return res.status(401).json({
            status: 'failure',
            message: 'APIs not running successfully',
            data: null
        });
    }
});

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`.magenta));