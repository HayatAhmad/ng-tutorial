const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const DbTestInit = require('./db-test-init');

const rentalRoutes = require('./routes/rentals');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB_URI, { useNewUrlParser: true })
.then(()=>{
    console.log('DB connected')
    //const dbTestInit = new DbTestInit();
    //dbTestInit.seedDb();
})
.catch(function(reason){
    'Unable to connect to the mongodb instance. Error: ', reason
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Server started at port 3001")
});