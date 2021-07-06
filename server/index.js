const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const router = require('./services/router');

// database configuration
// const {MongoClient} = require('mongodb');

// server configuration
const app = express();
const PORT = 8080 || process.env.PORT;

// app configuration for backend
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


// entry point into web server
async function main() {
  // const uri = process.env.DATABASE_URI;
  // const client = new MongoClient(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });

  // Connect to the MongoDB cluster
  // await client.connect();
  // console.log('Database connection successful.')

  // webhooks
  app.post('/sign_in', (req, res) => {
    let userInfo = req.body;
    console.log(userInfo);
  });

  // app.post('/register', async (req, res) => {
  //   let userInfo = req.body;
    
  //   try {
  //     await client.db("app").collection("users").insertOne(userInfo);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //     await client.close();
  //     console.log('user inserted into database.')
  //   }
  // });

  // open API gateway
  app.use(router);

  // start up the server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

// start
main().catch(console.error);