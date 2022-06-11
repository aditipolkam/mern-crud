const express = require('express');
const cors = require('cors');
require('./db/conn');
require("dotenv").config();
const users = require('./models/userSchema');
const router = require("./routes/router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 8003, () => {
    console.log(`Server is running`);
})