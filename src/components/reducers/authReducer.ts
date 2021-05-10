
import { types } from '../types/types';

export const authReducer = (state = {}, action: any) => {
	switch (action.type) {
		case types.login:
			return {
				id: action.payload.id,
			}	
		default:
			return state;
	}
}