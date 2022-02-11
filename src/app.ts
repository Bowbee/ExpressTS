const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const httpStatus = require('http-status');
const ApiError = require('./utils/apiError');

const app = express();

const { errorConverter, errorHandler } = require('./middlewares/error');
const routes = require('./routes');

// set security HTTP headers
app.use(helmet());

app.use(cors({ origin: '*' }));

app.options('*', cors());

// parse json request body
app.use(express.json());

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// api routes
app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use(cors(), (req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export = app;
