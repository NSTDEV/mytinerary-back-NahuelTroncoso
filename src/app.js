require('dotenv').config();
require('./config/db.js');
const cors = require('cors');
const express = require('express');
const cityRouter = require('./router/cityRouter.js');
const itineraryRouter = require('./router/itineraryRouter.js');
const userRouter = require('./router/userRouter.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', cityRouter);
app.use('/api', itineraryRouter);
app.use('/api', userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;