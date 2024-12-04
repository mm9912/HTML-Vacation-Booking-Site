import 'dotenv/config';
import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if(!process.env.MONGODB_URI){
    throw new Error('URI error');
}

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;