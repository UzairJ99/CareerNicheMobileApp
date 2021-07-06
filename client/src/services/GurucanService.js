/*
This file contains all functions that work with the Gurucan API as well
as Gurucan Webhooks.
*/
import axios from 'axios';

/**
 * Creates a user through the Gurucan Create User endpoint
 * @param {object} credentials user credentials
 * @returns {string} user id
 * @see {@link https://gurucan.stoplight.io/docs/gurucan-api/reference/Gurucan-API.v1.yaml/paths/~1admin~1users/post}
 */
export const createUser = async (credentials) => {
    // package data to create a Gurucan User
    let userInfo = {
        "email": credentials.email,
        "role": "user",
        "password": credentials.password,
        "meta": {}
    }

    /**
     * send to Gurucan endpoint through POST request
     * @TODO replace IP address with localhost  
     */ 
    let jsonFetch = await axios.post('http://000.000.0.00:8080/admin/users', userInfo);
    let jsonData = jsonFetch.data;

    return jsonData;
}

/**
 * Packages the new users data to be sent to the backend for processing through
 * Gurucan's Webhooks API to signup the user.
 * @param {object} credentials user credentials
 * @param {string} validationStatus registration form state if all inputs were valid
 * @return {object} data to send through POST request
 */
export const packageData = async (credentials, validationStatus) => {
    // create user and get user ID that was just created and store as string
    let userData = await createUser(credentials);
    let userID = userData.user._id;

    // store all the data into this object
    let data = {
        "source": {
            "_id": userID,
            "email": credentials.email,
            "status": validationStatus,
            "city": credentials.city,
            "birthDate": credentials.birthDate
        },
        "source_type": "user",
        "action": "sign_up",
        "influencer": "string",
        "password": credentials.password
    }

    return data;
}