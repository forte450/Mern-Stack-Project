const express = require('express');
const databseConnection = require('./database');
const app = express();
const PORT = 5000;      
databseConnection();