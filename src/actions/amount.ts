import { types } from '../components/types/types';

export const setSumAssuredAc = (amount: number) => ({
	type: types.setSumAssured,
	payload: {
		setSumAssured: amount
	}
});