const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const twilio = require('twilio'); 
const { AccessToken } = require('livekit-server-sdk');
const app = express();
const port = 3000;
// Middlewares
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(express.static(__dirname));
// --- CREDENTIALS ---
const LIVEKIT_API_KEY = 'YOUR_LIVEKIT_API_KEY';       
const LIVEKIT_API_SECRET = 'YOUR_LIVEKIT_API_SECRET'; 
const LIVEKIT_SERVER_URL = 'wss://YOUR_SERVER_URL';   

const TWILIO_ACCOUNT_SID = 'ACf5e63d7bfe662c8be625ef78815b9161'; 
const TWILIO_AUTH_TOKEN = '94c39e1c48db77980e572495e435b741';                       
const TWILIO_PHONE_NUMBER = '+16185239920'; 

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);