const mongose = require('mongoose');

const dataBase = process.env;

mongose.connect(dataBase.DATABASE_URL, {
    dbName: dataBase.name,
    user: dataBase.user,
    pass: dataBase.pass,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log("Error connecting to database: " + error)
    });
