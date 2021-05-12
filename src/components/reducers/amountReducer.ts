import { types } from '../types/types';

const initialAmount = {
	setSumAssured: 12500,
	coverageAmount: 20
}

export const amountReducer = (state = initialAmount, action: any) => {
	switch (action.type) {
		case types.setSumAssured:
			return {
				...state,
				setSumAssured: action.payload.setSumAssured,
			}
		case types.setCoverageAmount:
			return {
				...state,
				coverageAmount: state.coverageAmount + action.payload.coverageAmount,
			}			
		default:
			return state;
	}
}