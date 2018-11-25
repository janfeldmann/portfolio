const commonConfig = {
	env: process.env.NODE_ENV || 'development',
	host: 'http://127.0.0.1',
	port: parseInt(process.env.PORT, 10) || 5000,
	corsDomain: process.env.CORS_DOMAIN || '*', // Be sure to switch to your production domain
	graphqlRoute: '/graphql',
};

export default commonConfig;
