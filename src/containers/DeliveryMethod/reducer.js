import {
	ADD_METHOD,
	UPDATE_VALUE,
} from './actionTypes';

const initialState = {
	data: ['Mail', 'Drone', 'Teleport'],
	selectedMethod: '',
	values: {},
};

function reducer(state = initialState, action) {
	switch (action.type) {
	case ADD_METHOD:
		return {
			...state,
			selectedMethod: action.payload,
		};
	case UPDATE_VALUE:
		return Object.assign({}, state, {
			values: Object.assign({}, state.values, {
				[action.name]: action.value,
			}),
		});
	default:
		return state;
	}
}

export default reducer;
