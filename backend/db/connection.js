const mongoose = require('mongoose')

const mongoURI = "mongodb://127.0.0.1:27017/ingredients";

mongoose.connect(mongoURI, {
    userNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})
.then((instance)=> {
    console.log(`Connected to the db: ${instance.connections[0].name}`)
})
.catch((err) => console.log(`Connection failed`, err));

module.exports = mongoose; 