import { combineReducers } from 'redux';
import flow from '../hoc/createFlow/reducer';
import products from '../containers/Products/reducer';
import methods from '../containers/DeliveryMethod/reducer';

const appReducer = combineReducers({
	flow,
	products,
	methods,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
	if (action.type === 'RESET') {
		state = initialState;
	}
	return appReducer(state, action);
};

export default rootReducer;
