import { BtnApp } from "../shared/buttons/BtnApp"
import { useSelector } from 'react-redux';

export const ArmPlanTotal = () => {
	const { coverageAmount } = useSelector((state: any) => state.amount);

	return (
		<div className="arm-plan-total">
			<div>
				<p className="arm-plan-total__amount">${coverageAmount}.00</p>
				<p className="arm-plan-total__text">MENSUAL</p>
			</div>
			<div className="arm-plan-total__btn">
				<BtnApp title="lo quiero"/>
			</div>
		</div>
	)
}
