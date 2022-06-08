require('dotenv').config();
const mongoose = require('mongoose');
const dbPwd = process.env.DB_PWD;
const dbURL = `mongodb+srv://root:${dbPwd}@cluster0.hispt.mongodb.net/mernstack?retryWrites=true&w=majority`;


mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
})
.catch(err => {
    console.log(err);
});