import { types } from "../components/types/types";

export const startRegister = (documentNumber: string, phone: string, license: string) => {
	return async (dispatch) => {
		const url = 'https://jsonplaceholder.typicode.com/users/1';
		const resp = await fetch(url);
		const data = await resp.json();
		const { name, email } = data;
		dispatch(login(documentNumber, phone, license, name, email));
	}
}

export const login = (
	documentNumber: string,
	phone: string,
	license: string,
	name: string,
	email: string,
) => ({
	type: types.login,
	payload: {
		documentNumber,
		phone,
		license,
		name,
		email
	}
});

export const setDataCarAc= (year: string, model: string) => ({
	type: types.setDataCar,
	payload: {
		year,
		model
	}
});