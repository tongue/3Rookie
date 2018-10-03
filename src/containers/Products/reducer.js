import {
	FETCHING_PRODUCTS,
	FETCH_PRODUCTS_FULFILLED,
	FETCH_PRODUCTS_REJECTED,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
} from './actionTypes';

const initialState = {
	data: null,
	isLoading: true,
	isLoaded: false,
	selectedProduct: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
	case FETCHING_PRODUCTS:
		return {
			...state,
		};
	case FETCH_PRODUCTS_FULFILLED:
		return {
			...state,
			data: action.payload,
			isLoading: false,
			isLoaded: true,
		};
	case FETCH_PRODUCTS_REJECTED:
		return {
			...state,
			data: action.error,
			isLoading: false,
		};
	case ADD_PRODUCT:
		return {
			...state,
			selectedProduct: [...state.selectedProduct, action.payload],
		};
	case REMOVE_PRODUCT:
		return {
			...state,
			selectedProduct: state.selectedProduct.filter(product => action.payload !== product),
		};
	default:
		return state;
	}
}

export default reducer;
