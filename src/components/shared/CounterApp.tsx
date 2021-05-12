import { useState } from 'react';
type CounterArgs = {
	numberAdd?: number,
	minorRank?: number,
	higherRank?: number,
	initialValue?: number,
	handleChangeValue: (e: number) => void,
}

export const CounterApp = ({ numberAdd = 1, minorRank, higherRank, initialValue = 0, handleChangeValue} : CounterArgs) => {
	const [value, setValue] = useState(initialValue)

	const handleClick = (c: number) => {
		if (minorRank && c === -1) {
			if (minorRank <= (value + (numberAdd * c))) {
				setValue(value + (numberAdd * c));
				handleChangeValue(value);
			}
		} else if (higherRank && c === 1) {
			if (higherRank >= (value + (numberAdd * c))) {
				setValue(value + (numberAdd * c));
				handleChangeValue(value);
			}
		} else if (!!minorRank && !!higherRank) {
			setValue(value + (numberAdd * c));
			handleChangeValue(value);
		}
	}

	return (
		<div className="counter-app">
			<button 
				className="counter-app__btn"
				onClick={ () => handleClick(-1) }
				type="button"
			>-</button>
			<span className="counter-app__text">$ { value }</span>
			<button 
				className="counter-app__btn"
				onClick={ () => handleClick(1) }
				type="button"
			>+</button>
		</div>
	)
}
