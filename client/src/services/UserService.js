/*
this file contains all functions to work with the database for the 
users collection.
*/
import axios from 'axios';

/**
 * Store the user into the database.
 * @param {object} data user credentials from register form
 * @returns 
 */
export const saveUser = async (data) => {
    let response = await axios.post('http://000.000.0.00:8080/registerUser', data);
    let responseData = response.data;
    console.log(responseData);

    return responseData;
}

/**
 * Searches the database for the user through their email and returns the match.
 * @param {object} data user credentials from login form
 * @returns 
 */
export const findUser = async (data) => {
    let postData = { 
        email: data.email,
        password: data.password
    };
    let response = await axios.post('http://000.000.0.00:8080/findUser', postData);

    return response.data;
}

/**
 * Gets the courses the user has purchased from Gurucan
 * @TODO Seperate this from the user service to the gurucan service because
 * each service should only be connected to a single api/database.
 * @param {string} user user ID
 * @returns 
 */
export const getCourses = async (user) => {
    let response = await axios.get(`http://000.000.0.00:8080/admin/users/${user}`);
    return response.data.user.purchasedItems;
}

/**
 * Updates the users profile and stores the updates in the database.
 * @param {string} user user's email
 * @param {object} profile new profile information
 * @returns 
 */
export const updateUser = async (user, profile) => {
    let packagedData = {
        email: user,
        ...profile
    }
    let response = await axios.post('http://000.000.0.00:8080/updateUser', packagedData);
    return response.data;
}

/**
 * Get the user's profile information
 * @param {string} user user id
 * @returns 
 */
export const getUserProfile = async (user) => {
    let packagedData = {
        userID: user
    }
    let response = await axios.post('http://000.000.0.00:8080/getUserProfile', packagedData);

    return response.data;
}