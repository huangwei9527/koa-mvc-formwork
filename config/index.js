module.exports = {
	port: 4000,
	mongodb: {
		url: 'mongodb://localhost:27017/inkwash',
		options: {}
	},
	middleware:['handlerError']
}
