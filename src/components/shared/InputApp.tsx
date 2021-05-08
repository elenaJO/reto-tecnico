type InputArgs = {
	optionalClass?: string
}

export const InputApp = ({ optionalClass }: InputArgs) => {
	return (
		<div className={optionalClass}>
			<input
				className="input-app"
				type="text"
				placeholder="Nro. de doc"
				name="documentNumber"
				autoComplete="off"
			/>
		</div>
	)
}
