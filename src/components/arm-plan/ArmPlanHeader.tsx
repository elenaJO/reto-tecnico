import imgCard from '../../assets/images/person-card.svg';
import { useSelector } from 'react-redux';

export const ArmPlanHeader = () => {

	const { license, modelCar, yearCar } = useSelector((state: any) => state.auth);

	return (
		<div className="arm-plan-header">
			<h2 className="arm-plan-header__title">Mira las coberturas</h2>
			<p className="arm-plan-header__subtitle">Conoce las coberturas para tu plan</p>
			<div className="arm-plan-header__card">
				<div className="arm-plan-header__content">
					<p className="arm-plan-header__text--small">Placa: { license }</p>
					<p className="arm-plan-header__text mb-16">{modelCar} { yearCar }</p>
					<button className="arm-plan-header__btn">EDITAR</button>
				</div>
				<div className="arm-plan-header__card-image">
					<img 
						src={imgCard} 
						alt="hombre en la tarjeta"
						className="arm-plan-header__image"
						height="156"
					/>
				</div>
			</div>
		</div>
	)
}
