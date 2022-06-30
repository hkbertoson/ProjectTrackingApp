const colors = require('colors');
const express = require('express');
const connectDB = require('../config/db');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

// Connect to Database
connectDB();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, console.log(`Application running on ${port}`));