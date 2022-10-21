import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import routes from './Routes/Route.js';

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//route
app.use('/',routes);


//start server
app.listen(8080,()=>{
    console.log("Server is running at port 8080 ");
})


