import dotenv from 'dotenv';
import express  from 'express';
import Routes from './routes/routes.js';

dotenv.config();
const appExpress = express();
appExpress.use("/", Routes);





let config = JSON.parse(process.env.MY_CONFIG);

appExpress.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});