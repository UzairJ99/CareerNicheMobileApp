/*
This file contains all functions to provide validation for user registration
or any other form input throughout the application.
*/


// constants for regex pattern matching
const passwordPattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
   * Checks if the given value is an empty string
   * @param {string} value the credential field passed in
   * @returns {boolean} empty or not
   */
export const isEmpty = (value) => {
    return value === '';
}

/**
 * Checks if the password the user created is secure enough.
 * Must contain at least 1 symbol and at least 6 characters in length.
 * @param {object} credentials user credentials
 * @returns {boolean} password is strong
 */
export const isStrongPassword = (credentials) => {
    let longEnough = credentials.password.length >= 6;
    let containsSymbol = passwordPattern.test(credentials.password);

    return (longEnough && containsSymbol);
}

/**
 * Validates the information given by the user in the registration form
 * @param {object} credentials user credentials
 * @returns {boolean} valid or not
 */
export const validateInfo = (credentials) => {
    // conditions for successful registration
    let passwordsMatch = (credentials.password === credentials.confirmedPassword);
    let allInfoGiven = !(Object.values(credentials).some(isEmpty));
    let validEmail = emailPattern.test(String(credentials.email).toLowerCase());

    /**
     * @todo validate the other remaining input fields: city and birthdate
     */

    // make sure everything is valid
    return (passwordsMatch && allInfoGiven && validEmail && isStrongPassword(credentials));
}