type InputArgs = {
	optionalClass?: string
	type: string,
	placeholder: string,
	name: string,
	value: string | number,
	handleInputChange: (e: any) => void,
	hasError?: boolean;
	errorMessage?: string;
}

export const InputApp = (
	{ optionalClass,
		type,
		placeholder,
		name,
		value,
		handleInputChange,
		hasError,
		errorMessage
	}: InputArgs) => {

	return (
		<div className={optionalClass}>
			<input
				className="input-app"
				type={ type }
				placeholder={ placeholder }
				name={ name }
				value={ value }
				autoComplete="off"
				onChange={ handleInputChange }
			/>
			<p className="input-app__has-error">{hasError ? errorMessage : ''}</p>
		</div>
	)
}
