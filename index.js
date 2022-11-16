const express = require('express');
const app = express();
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const colors = require('colors');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`.magenta));