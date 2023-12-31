require('dotenv').config();
require('./config/db.js');
const cors = require('cors');
const express = require('express');
const router = require('./router/router');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
