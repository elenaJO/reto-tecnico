import { BtnApp } from "../shared/buttons/BtnApp"
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const ArmPlanTotal = () => {
	const { coverageAmount } = useSelector((state: any) => state.amount);

	const history = useHistory();

	const goToWelcome = () => {
		history.push('/bienvenido');
	}

	return (
		<div className="arm-plan-total">
			<div>
				<p className="arm-plan-total__amount">${coverageAmount}.00</p>
				<p className="arm-plan-total__text">MENSUAL</p>
			</div>
			<div className="arm-plan-total__btn">
				<BtnApp 
					title="lo quiero"
					handleClick={ goToWelcome }
				/>
			</div>
		</div>
	)
}
