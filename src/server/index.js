const express = require('express');
const bodyParser = require('body-barser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const massive = require('massive');
const app = express();

const {

} = process.env;