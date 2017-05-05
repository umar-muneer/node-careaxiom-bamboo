process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}
module.exports = {
	development: {
		'username': process.env.DB_USER,
		'password': process.env.DB_PASSWORD,
		'database': process.env.DB_NAME,
		'host': process.env.DB_HOST,
		'dialect': 'postgres',
		'logging': console.log
	},
	test: {
		'username': 'root',
		'password': null,
		'database': 'careaxiom_bamboo',
		'host': '127.0.0.1',
		'dialect': 'postgres'
	},
	production: {
		'username': process.env.DB_USER,
		'password': process.env.DB_PASSWORD,
		'database': process.env.DB_NAME,
		'host': process.env.DB_HOST,
		'dialect': 'postgres'
	}
};
