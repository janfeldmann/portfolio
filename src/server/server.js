import React from 'react';
import { renderToNodeStream, renderToString } from 'react-dom/server';
import express from 'express';
import App from '../client/app';
import './watcher';

// start server in production for Server Side Rendering
if (process.env.NODE_ENV === 'production') {
	const app = express();

	app.get('/', (req, res) => {
		renderToNodeStream(<App />).pipe(res);
	});

	app.listen(3000, () => {
		console.log('listening on port 3000...', process.env.NODE_ENV);
	});
}
