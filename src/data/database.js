const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:2831Roger@cluster0.mgm3e.mongodb.net/angular-express?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    autoIndex: false
})
.then((db) => console.log('Db is connected'))
.catch((err) => console.log(err))