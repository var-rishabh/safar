// Inside app.js
const express = require('express');
const app = express();

const Razorpay = require('razorpay');

const bodyparser = require('body-parser') ;
app.use(require('body-parser').json());
var instance = new Razorpay({

    key_id: "rzp_test_jz1qRgWLRxhf8n",

    key_secret: "TuagXi1XifPOb9664cEbwdmZ"
});

app.use("/assets", express.static('assets'));

const PORT = process.env.PORT || '5000';
app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.post('/create/orderId', (req, res) => {
    console.log('new order!!', req.body);
    var options = {
        amount: req.body.price,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "reciept_1"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        res.send({ orderId: order.id });
    });
})


app.post("/api/payment/verify", (req, res) => {
    console.log("verify reached");
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'TuagXi1XifPOb9664cEbwdmZ')
        .update(body.toString())
        .digest('hex');
    console.log("sig received ", req.body.response.razorpay_signature);
    console.log("sig generated ", expectedSignature);
    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature)
        response = { "signatureIsValid": "true" }
    res.send(response);
});

app.listen(1234, () => {
    console.log(`Example app listening at http://localhost:1234}`)
})
