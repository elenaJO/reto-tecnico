type RadioBtnArgs = {
	optionalClass?: string
}

export const RadioBtnApp = ({ optionalClass }: RadioBtnArgs) => {
	return (
		<div className={`${optionalClass} radio-btn-app`}>
			<input
				className="radio-btn-app__radio"
				type="radio" 
				id="check2"
			/>
    	<label
				className="radio-btn-app__label"
				htmlFor="check2"
			>Si
			</label>
		</div>
	)
}
