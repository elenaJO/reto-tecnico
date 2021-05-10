type SelectArgs = {
	optionalClass?: string
	value?: string | number,
	handleSelectChange?: (e: any) => void,
	name?: string,
}

export const SelectApp = ({ optionalClass, value, handleSelectChange, name }: SelectArgs) => {
	return (
		<div className={`${optionalClass} content-select`}>
			<select 
				name={ name }
				className="content-select__select"
				value={ value }
				onChange={ handleSelectChange }
			>
				<option value="dni">DNI</option>
				<option value="ce">CE</option>
			</select>
			<i></i>
		</div>
	)
}
