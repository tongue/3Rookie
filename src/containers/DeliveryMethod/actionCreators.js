import {
	ADD_METHOD,
	UPDATE_VALUE,
} from './actionTypes';

export const addMethod = methodValue => ({
	type: ADD_METHOD,
	payload: methodValue,
});

export const updateValue = (name, value) => ({
	type: UPDATE_VALUE,
	name,
	value,
});
