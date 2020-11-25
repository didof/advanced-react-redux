// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// style
import './index.css';

// components
import App from 'components/App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
