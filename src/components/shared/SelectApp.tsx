type SelectArgs = {
	optionalClass?: string
}

export const SelectApp = ({ optionalClass }: SelectArgs) => {
	return (
		<div className={`${optionalClass} content-select`}>
			<select name="select-example" className="content-select__select">
				<option value="value1">DNI</option>
				<option value="value1">CE</option>
			</select>
			<i></i>
		</div>
	)
}
