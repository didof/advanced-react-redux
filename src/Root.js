import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
// import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

function Root({ children, initialState = {} }) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxThunk)
	);

	return <Provider store={store}>{children}</Provider>;
}

export default Root;
