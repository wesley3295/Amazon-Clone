const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
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
// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-22f24/us-central1/api