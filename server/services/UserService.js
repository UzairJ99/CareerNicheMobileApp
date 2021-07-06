var express = require('express');
var dbRouter = express.Router();
var Encrypt = require('./EncryptionService');

// get database services
var DBServices = require('./DBService');
var client;

async function initialLoad() {
    try {
        console.log("connecting to database...");
        client = await DBServices();
        console.log("database connected.");
    } catch (err) {
        console.log(err);
    }
}

// connect to DB
initialLoad();

dbRouter.post('/registerUser', async (req, res) => {
    let userInfo = req.body;
    // encrypt password before storing in database for security
    let encryptor = new Encrypt();
    let encryptedPassword = encryptor.hashPassword(userInfo.password);
    userInfo.password = encryptedPassword;

    // save user to database
    try {
        await client.db("app")
        .collection("users")
        .insertOne(userInfo);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('User successfully registered in database.');
    }
    res.send(res.data);
});

dbRouter.post('/findUser', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = {
        'source.email': email // nested query
    }

    // find user in database
    try {
        let user = await client.db("app")
        .collection("users")
        .findOne(query);
        // use encryptor to match encrypted passwords since db stores the encrypted version
        let encryptor = new Encrypt();
        var userID = user.source._id;
        var isValid = user ? encryptor.validPassword(password, user.password) : false;
        
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Search complete.');
    }
    
    res.send({isValid: isValid, userID: userID});
});

dbRouter.post('/updateUser', async (req, res) => {
    const email = req.body.email;
    const newProfile = req.body;
    const query = {
        'source.email': email
    };
    const newFields = {
        'source.name': newProfile.name,
        profession: newProfile.profession,
        'source.city': newProfile.city,
        'source.birthDate': newProfile.birthdate
    }
    // find user in database and update their info
    try {
        var user = await client.db("app")
        .collection("users")
        .updateOne(query, {$set: {...newFields}});
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Update complete.');
    }
    res.send(user);
});

dbRouter.post('/getUserProfile', async (req, res) => {
    const query = {
        'source._id': req.body.userID
    }
    console.log(query);

    // find specific fields from the database for the user's profile page
    try {
        var user = await client.db("app")
        .collection("users")
        .findOne(query);

        /**
         * Check for non existent fields.
         * @TODO check if fields are auto populated to null or undefined.
         *       if undefined keep this code, if null scrap this code.
         */
        let profession = user.profession ? user.profession : null;
        let name = user.source.name ? user.source.name : null;

        var profile = {
            name: name,
            profession: profession,
            city: user.source.city,
            birthdate: user.source.birthDate
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Profile search complete.');
    }
    console.log(profile);
    res.send(profile);
})

module.exports = dbRouter;