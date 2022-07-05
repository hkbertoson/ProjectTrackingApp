const colors = require('colors');
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');
// require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const path = require('path');

const app = express();

// Connect to Database
connectDB();

app.use(cors());
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.get('/', (req, res) => res.send('Hello from Express!'));
app.listen(port, console.log(`Application running on ${port}`));
