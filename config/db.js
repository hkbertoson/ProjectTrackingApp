const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI);

	console.log(`MongoDB COnnect: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
