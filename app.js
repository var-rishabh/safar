const express = require('express');
const app = express();
const path = require("path");
const colors = require('colors');

const Razorpay = require('razorpay');
const bodyparser = require('body-parser') ;
app.use(require('body-parser').json());
var instance = new Razorpay({
    key_id: "rzp_test_jz1qRgWLRxhf8n",
    key_secret: "TuagXi1XifPOb9664cEbwdmZ"
});

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
const guide = require('./routes/guideRoute');
const chat = require('./routes/chatRoute');

app.use("/auth", auth);
app.use("/monuments", monument);
app.use("/guides", guide);
app.use("/chat", chat);

app.post('/monuments/create/orderId', (req, res) => {
    // console.log('new order!!', req.body);
    var options = {
        amount: req.body.price,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "reciept_1"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        // res.send({ orderId: order.id });
    });
})

app.post('/guides/create/orderId', (req, res) => {
    // console.log('new order!!', req.body);
    var options = {
        amount: req.body.price,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "reciept_1"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        // res.send({ orderId: order.id });
    });
})

app.get("/final", (req, res) => {
    res.render("final");
});

app.get("/", async (req, res) => {
    res.render("home");
});

module.exports = app;