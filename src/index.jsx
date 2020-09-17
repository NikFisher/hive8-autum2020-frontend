import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app';

// APP_VERSION is set in Webpack's definePlugin

const ClientSideApp = () => (
	<BrowserRouter>
		<App appVersion={APP_VERSION} />
	</BrowserRouter>
);

render(<ClientSideApp />, document.querySelector('#root'));

// For SSR, use:
// ReactDOM.hydrate(<ClientSideApp />, document.querySelector('#root'));
