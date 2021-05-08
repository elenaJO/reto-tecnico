type BtnArgs = {
	title: string
}

export const BtnApp = ({ title }: BtnArgs) => {
	return (
		<button className="btn">
			{ title }
		</button>
	)
}
