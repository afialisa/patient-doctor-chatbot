const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Database Config
const db = 'YOUR_MONGO_URI'; // Replace with your MongoDB URI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Routes
const users = require('./routes/api/users');
const chat = require('./routes/api/chat');

app.use('/api/users', users);
app.use('/api/chat', chat);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

