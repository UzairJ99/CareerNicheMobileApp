/**
 * Establish a connection to MongoDB.
 * @returns client connection
 */
module.exports = DBServices = async (client) => {
    // database configuration
    var {MongoClient} = require('mongodb');
    var uri = process.env.DATABASE_URI;

    try {
        console.log("creating client...");
        var client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.log(err);
    }
    
    
    return await client.connect();
}