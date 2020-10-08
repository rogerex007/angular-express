require('dotenv').config();
const mongoose = require('mongoose');

let User = process.env.DB_USER;
let Pass = process.env.DB_PASS;
let Uri = `mongodb+srv://${User}:${Pass}@cluster0.mgm3e.mongodb.net/angular-express?retryWrites=true&w=majority`;

mongoose.connect(Uri, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    autoIndex: false
})
.then((db) => console.log('Db is connected'))
.catch((err) => console.log(err))