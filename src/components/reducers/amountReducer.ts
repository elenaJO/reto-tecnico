import { types } from '../types/types';

const initialAmount = {
	setSumAssured: 12500
}

export const amountReducer = (state = initialAmount, action: any) => {
	switch (action.type) {
		case types.setSumAssured:
			return {
				...state,
				setSumAssured: action.payload.setSumAssured,
			}	
		default:
			return state;
	}
}