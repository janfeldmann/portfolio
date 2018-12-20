import next from 'next';
import express from 'express';
import cors from 'cors';
import './watcher';

// Config
import config from './config';
import SERVER from './graphql/schema';

const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = nextApp.getRequestHandler();

function listen() {
	const port = app.get('port') || config.port;
	app.listen(port, (error) => {
		if (error) throw error;
		console.log(`The server is running and listening at http://localhost:${port}`);
		console.log(`http://localhost:${port}/graphql`);
	});
}

// Middleware: GraphQL
/*

*/

nextApp.prepare().then(() => {
	// set static directory
	app.use(express.static('dist'));

	// enable cors
	app.use(cors({
		origin: config.corsDomain,
		optionsSuccessStatus: 200,
	}));

	// Endpoint to check if the API is running
	app.get('/api/status', (req, res) => {
		res.send({ status: 'ok' });
	});

	app.get('*', (req, res) => handler(req, res));

	listen();

	SERVER.applyMiddleware({
		app,
	});
});
