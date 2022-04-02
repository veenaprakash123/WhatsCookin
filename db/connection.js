const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV === 'production'
? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/ingredients';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})
.then((instance)=> {
    console.log(`Connected to the db: ${instance.connections[0].name}`)
})
.catch((err) => console.log(`Connection failed`, err));

module.exports = mongoose; 