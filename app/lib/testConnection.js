const clientPromise = require('./db');

async function testConnection() {
    try {
        const client = await clientPromise;
        console.log("Connected successfully to MongoDB");
    } catch (err) {
        console.error("Connection to MongoDB failed", err);
    }
}

testConnection();