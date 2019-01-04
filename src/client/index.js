import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './app';

// server side rendering only in production mode
if (process.env.NODE_ENV === 'production') {
	hydrate(<App />, document.getElementById('app'));
} else {
	render(<App />, document.getElementById('app'));
}
