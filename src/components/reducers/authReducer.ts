
import { types } from '../types/types';

export const authReducer = (state = {}, action: any) => {
	switch (action.type) {
		case types.login:
			return {
				documentNumber: action.payload.documentNumber,
				phone: action.payload.phone,
				license: action.payload.license,
				name: action.payload.name,
				email: action.payload.email,
			}	
		default:
			return state;
	}
}