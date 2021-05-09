import { BtnApp } from "../shared/buttons/BtnApp"
import { RadioBtnApp } from "../shared/RadioBtnApp"
import { SelectApp } from "../shared/SelectApp"
import imgCar from '../../assets/images/car.svg';
import { CounterApp } from "../shared/CounterApp";

export const AutoDataForm = () => {
	return (
		<form className="auto-data-form">
			<h2 className="auto-data-form__text">¡Hola, <span className="auto-data-form__text auto-data-form__text--name">Juan!</span>
			</h2>
			<p className="auto-data-form__info">Completa los datos de tu auto</p>
			<div>
				<SelectApp optionalClass="mb-16"/>
				<SelectApp/>
				<div className="auto-data-form__content-img">
					<img src={imgCar} alt="carro" height="48"/>
					<div className="auto-data-form__content-text">
						<p className="auto-data-form__text-model">¿No encuentras el modelo?</p>
						<p className="auto-data-form__text-link">CLIC AQUÍ</p>
					</div>
				</div>
			</div>
			<div>
				<p className="auto-data-form__text--small text-right">¿Tu auto es a gas?</p>
				<div className="auto-data-form__group-radio">
					<RadioBtnApp optionalClass="radio-right"/>
					<RadioBtnApp/>
				</div>
			</div>
			<div>
				<p className="auto-data-form__text--small">Indica la suma asegurada</p>
				<div className="mb-16">
					<span className="auto-data-form__price text-left">MIN $12.500 </span>
					<span className="auto-data-form__price text-right">MAX $16,500</span>
				</div>
			</div>
			<CounterApp/>
			<BtnApp title="continuar"/>
		</form>
	)
}
