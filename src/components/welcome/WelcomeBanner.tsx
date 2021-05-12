import { BtnApp } from "../shared/buttons/BtnApp"
import { useSelector } from 'react-redux';

export const WelcomeBanner = () => {

	const { email } = useSelector((state: any) => state.auth);

	return (
		<div className="welcome-banner">
			<div className="welcome-banner__image"></div>
			<div className="welcome-banner__content">
				<h2 className="welcome-banner__title">
					<span className="welcome-banner__title welcome-banner__title--red">¡Te damos la bienvenida! </span>
					Cuenta con nosotros para proteger tu vehículo
				</h2>
				<p className="welcome-banner__message">
					Enviaremos la confirmación de compra de tu Plan Vehícular
					Tracking a tu correo: { email }
				</p>
				<BtnApp title="cómo usar mi seguro"/>
			</div>
		</div>
	)
}
