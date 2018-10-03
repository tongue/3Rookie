import { NEXT_STEP, PREV_STEP, RESET } from './actionTypes';

export const nextStep = () => ({
	type: NEXT_STEP,
});

export const prevStep = () => ({
	type: PREV_STEP,
});

export const reset = () => ({
	type: RESET,
});
