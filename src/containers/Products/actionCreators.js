import {
	FETCHING_PRODUCTS,
	FETCH_PRODUCTS_FULFILLED,
	FETCH_PRODUCTS_REJECTED,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
} from './actionTypes';

export const fetchProductsFulfilled = payload => ({
	type: FETCH_PRODUCTS_FULFILLED,
	payload,
});

export const fetchProductsRejected = error => ({
	type: FETCH_PRODUCTS_REJECTED,
	error,
});

export const fetchProducts = () => (dispatch) => {
	dispatch({
		type: FETCHING_PRODUCTS,
	});
	fetch('/api/products')
		.then(response => response.json())
		.then((payload) => {
			dispatch(fetchProductsFulfilled(payload));
		})
		.catch((error) => {
			dispatch(fetchProductsRejected(error));
		});
};

export const addProduct = productID => ({
	type: ADD_PRODUCT,
	payload: productID,
});

export const removeProduct = productID => ({
	type: REMOVE_PRODUCT,
	payload: productID,
});
