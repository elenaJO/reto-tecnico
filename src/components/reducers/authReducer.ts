
import { types } from '../types/types';

export const authReducer = (state = {}, action: any) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				documentNumber: action.payload.documentNumber,
				phone: action.payload.phone,
				license: action.payload.license,
				name: action.payload.name,
				email: action.payload.email,
			}
		case types.setDataCar: {
			return {
				...state,
				yearCar: action.payload.year,
				modelCar: action.payload.model,
				useGasCar: action.payload.useGas,
			}
		}		
		default:
			return state;
	}
}