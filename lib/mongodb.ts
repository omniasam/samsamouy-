// ✅ Load .env.local early
import * as dotenv from 'dotenv';
dotenv.config(); // Load env vars BEFORE anything else

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URI;
console.log("✅ Loaded MONGODB_URI:", process.env.MONGODB_URI);

if (!uri) throw new Error('Please add your Mongo URI to .env.local');

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Ensure we use a cached connection in development (Next.js hot reload)
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// ✅ Declare global only in development context
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ Use global client cache in dev
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // ✅ In production, always create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
