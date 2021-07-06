var express = require('express');
var apiRouter = express.Router();

// create gateway
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'https://csmith.gurucan.com/api'
// const BASE_URL = 'http://000.000.0.00:8080';
const api = apiAdapter(BASE_URL)

apiRouter.post('/admin/users', (req, res) => {
    // orchestration layer
    api.post(req.path, req.body)
    .then(response => {
        res.send(response.data)
    })
});

apiRouter.get('/admin/users/:id', async (req, res) => {
    const userID = req.params.id;
    api.get(`/admin/users/${userID}`)
    .then(response => {
        res.send(response.data);
    })
})

module.exports = apiRouter;