const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
    "sk_test_51IvSdlB1aSCLZnTV8yWwrcz1TrnkOyh4s9HZSwJpyYQ2VaRgoT1QW6l5eQ7G3NqjC8WWktgGDnrw5TzlVTgQscW800zZ1JP9rS");


// API

// App Config
const app = express();
// Middleware
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async function(req,res){
    const total = req.query.total;
    console.log('Payment Request Received BOOM, for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    }) 
})
// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-22f24/us-central1/api;
