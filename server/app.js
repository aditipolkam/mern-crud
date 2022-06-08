const express = require('express');
require('./db/conn');
const app = express();

const port = 8003;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})