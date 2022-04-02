const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const router = require('./Router/index');

const app = express();

const port = 4567;
const hostname = 'localhost';
app.use(bodyParser.json());
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type'
    ],
  };

  if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
  }
  
  
  
  app.use(cors(corsOpts));


const serverDB = 'mongodb+srv://dhruv:cojW6paNRPkrH73g@cluster0.byqsk.mongodb.net/zomato_clone?retryWrites=true&w=majority';

app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at http://${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));
