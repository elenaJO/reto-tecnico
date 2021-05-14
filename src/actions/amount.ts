import { types } from '../components/types/types';

export const setSumAssuredAc = (amount: number) => ({
	type: types.setSumAssured,
	payload: {
		setSumAssured: amount
	}
});


export const setCoverageAmountAc = (amount: number) => ({
	type: types.setCoverageAmount,
	payload: {
		coverageAmount: amount
	}
});

export const resetAmountAc = () => ({
	type: types.resetAmount,
})