/*
This file is the API Gateway entry point
*/

const axios = require('axios');
require('dotenv').config();

module.exports = (baseURL) => {
  // set headers for the API call to provide API Key as well
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      'gc-api-key': process.env.API_KEY
    }
  });
}