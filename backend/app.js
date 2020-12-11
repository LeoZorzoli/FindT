const express = require('express');
require('express-async-errors');
const cors = require('cors');
const config = require('./util/config');
const logger = require('./util/logger');
const middleware = require('./util/middleware');
const mongoose = require('mongoose');

const userRouter = require('./controllers/user');
const loginRouter = require('./controllers/login');

const app = express();

mongoose.set('useCreateIndex', true);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('Connected to MongoDB');
    })
    .catch((error) => {
        logger.error('Error connection to MongoDb:', error.message);
    });

mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

app.use(middleware.errorHandler);

module.exports = app;