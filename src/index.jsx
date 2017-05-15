import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app.jsx';

const rendering = () => {
	render ( 
		<AppContainer>
			<App />
		</AppContainer>, 
		document.getElementById("root")
	);
}

rendering();

if (module && module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    const App = require('./components/app.jsx').default;
    rendering();
  });
}