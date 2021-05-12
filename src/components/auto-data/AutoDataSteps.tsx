import iconBack from '../../assets/icons/icon_back_purple.svg';
import { useHistory } from 'react-router-dom';

type AutoDataStepsArgs = {
	totalStep: number,
	step: number,
}

export const AutoDataSteps = ({ totalStep, step }: AutoDataStepsArgs) => {
	const history = useHistory();

	const goToBack = () => {
		history.goBack();
	}

	return (
		<div className="auto-data-steps">
			<img 
				src={iconBack} 
				alt="atras" 
				className="auto-data-steps__back"
				height="32"
				onClick={ goToBack }
			/>
			<div className="auto-data-steps__content-step">
				<span className="auto-data-steps__step">PASO {step} DE {totalStep}</span>
				<div className="auto-data-steps__bar">
					<div 
						className="auto-data-steps__bar--active"
						style={{ width: `${(100/totalStep) * step}%` }}
					>
						</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
