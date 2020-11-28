import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';

import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

function Root({ children, initialState = {} }) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(async, stateValidator)
	);

	return <Provider store={store}>{children}</Provider>;
}

export default Root;
