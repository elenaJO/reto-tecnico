type BtnArgs = {
	title: string,
	type?: string,
	disabled?: boolean, 
	handleClick?: (e: any) => void,
}

export const BtnApp = ({ title, handleClick, disabled = false }: BtnArgs) => {
	return (
		<button 
			className="btn" 
			onClick={ handleClick }
			disabled={ disabled }
		>
			{ title }
		</button>
	)
}
