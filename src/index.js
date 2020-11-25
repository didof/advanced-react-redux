// react
import React from 'react';
import ReactDOM from 'react-dom';

// style
import './index.css';

// components
import Root from './Root';
import App from 'components/App';

ReactDOM.render(
	<React.StrictMode>
		<Root>
			<App />
		</Root>
	</React.StrictMode>,
	document.getElementById('root')
);
