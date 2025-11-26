const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const twilio = require('twilio'); 
const { AccessToken } = require('livekit-server-sdk');
const app = express();
const port = 3000;
// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(express.static(__dirname)); // To serve viewer.html