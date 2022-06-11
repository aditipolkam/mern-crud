require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.DB_URI;


mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
})
.catch(err => {
    console.log(err);
});