// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Function to create geospatial indexes for location-based queries
export async function createLocationIndexes() {
  try {
    const client = await clientPromise;
    const db = client.db("rent-tool");
    
    // Create geospatial index on users collection for location queries
    await db.collection("users").createIndex(
      { "location": "2dsphere" },
      { background: true }
    );
    
    console.log("✅ Location indexes created successfully");
  } catch (error) {
    console.error("❌ Error creating location indexes:", error);
  }
}

export default clientPromise;
