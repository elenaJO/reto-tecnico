import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../components/reducers/authReducer';
import { amountReducer } from '../components/reducers/amountReducer';

const composeEnhancers = (typeof window !== 'undefined' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const reducers = combineReducers({
	auth: authReducer,
	amount: amountReducer, 
});

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);