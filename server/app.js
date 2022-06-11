const express = require('express');
const cors = require('cors');
require('./db/conn');
require("dotenv").config();
const users = require('./models/userSchema');
const router = require("./routes/router");
const port = 8003;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
})