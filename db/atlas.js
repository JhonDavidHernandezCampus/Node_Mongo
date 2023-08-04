import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
dotenv.config();

export async function con(){
    try {
        const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@dbexpress.a92izng.mongodb.net/${process.env.DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return {status:500, message: error};
    }
}