const express = require('express');
const app = express();
const path = require("path");
const colors = require('colors');

// social authentication
const passportConfig = require("./passport/passport");
const passport = require('passport');
const cookieSession = require('cookie-session')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: ["thisissocialkey"]
}))

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

const auth = require('./routes/auth');
const monument = require('./routes/monumentRoute');
// const guide = require('./routes/guideRoute');
const chat = require('./routes/chatRoute')

app.use("/auth", auth);
app.use("/monuments", monument)
// app.use("/guides", guide)
app.use("/chat", chat);

app.get("/", async (req, res) => {
    res.render("home");
});

module.exports = app;