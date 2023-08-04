import {Router} from 'express';
import { ObjectId } from 'mongodb';
import {con} from './../db/atlas.js';
import configGET  from '../midddleware/limit.js';
const appCampus = Router();

appCampus.get('/', configGET(), async(req,res) => {
    if (!req.rateLimit) return;
    
    console.log(req.rateLimit);
    res.send("estamos bien");
});

export default appCampus;

