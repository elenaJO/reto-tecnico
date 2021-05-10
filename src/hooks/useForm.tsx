import { useState } from 'react';

export const useForm = ( initialState: any = {}) => {
  const [values, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues( newFormState );
	}

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[ target.name ]: target.value
		});
	}
  return [ values, handleInputChange, reset ];
}