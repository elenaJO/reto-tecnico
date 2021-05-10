type InputArgs = {
	optionalClass?: string
	type: string,
	placeholder: string,
	name: string,
	value: string | number,
	handleInputChange: (e: any) => void,
}

export const InputApp = (
	{ optionalClass,
		type,
		placeholder,
		name,
		value,
		handleInputChange
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
		</div>
	)
}
