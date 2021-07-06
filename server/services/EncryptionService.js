/*
This file encrypts any sensitive data that needs to be passed around.
*/

var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = class Encryptor {
    /**
     * encrypts the users password
     * @param {string} password users password
     * @returns {string} encrypted password
     */
    hashPassword(password) {
        return bcrypt.hashSync(password, saltRounds, null);
    }

    /**
     * Checks if the password entered by the user matches the one stored in the db.
     * @param {string} enteredPassword the password from the input field
     * @param {string} realPassword password from the database
     * @returns {boolean}
     */
    validPassword(enteredPassword, realPassword) {
        return bcrypt.compareSync(enteredPassword, realPassword);
    }
}



