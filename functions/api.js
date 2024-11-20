const express = require('express');
const dbConnect = require("../config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const path = require("path");
const serverless = require('serverless-http');
const router = express.Router();
const cors = require('cors');
app.use(cors());
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
});

app.use("/.netlify/functions/api", router);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});
module.exports.handler = serverless(app);