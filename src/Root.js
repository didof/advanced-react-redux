import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers';

function Root({ children, initialState = {} }) {
	const store = createStore(rootReducer, initialState);

	return <Provider store={store}>{children}</Provider>;
}

export default Root;
