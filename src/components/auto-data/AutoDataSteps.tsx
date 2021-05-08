import iconBack from '../../assets/icons/icon_back_purple.svg';

export const AutoDataSteps = () => {
	return (
		<div className="auto-data-steps">
			<img 
				src={iconBack} 
				alt="atras" 
				className="auto-data-steps__back"
				height="32"
			/>
			<div className="auto-data-steps__content-step">
				<span className="auto-data-steps__step">PASO 1 DE 2</span>
				<div className="auto-data-steps__bar">
					<div className="auto-data-steps__bar--active"></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
