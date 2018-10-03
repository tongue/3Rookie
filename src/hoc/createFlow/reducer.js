import { NEXT_STEP, PREV_STEP } from './actionTypes';

const initialState = {
	activeStep: 0,
};

function reducer(state = initialState, action) {
	switch (action.type) {
	case NEXT_STEP:
		return {
			...state,
			activeStep: state.activeStep + 1,
		};
	case PREV_STEP:
		return {
			...state,
			activeStep: state.activeStep - 1,
		};
	default:
		return state;
	}
}

export default reducer;
