import { CheckBoxApp } from "../shared/CheckBoxApp"
import { InputApp } from "../shared/InputApp"
import { BtnApp } from '../shared/buttons/BtnApp';
import { SelectApp } from "../shared/SelectApp";

export const HomeForm = () => {
	return (
		<div className="home-form">
			<h2 className="home-form__title">Déjanos tus datos</h2>
			<form>
				<div className="mb-16 home-form__multiple">
					<SelectApp optionalClass="home-form__select"/>
					<InputApp optionalClass="home-form__input"/>
				</div>
				<InputApp optionalClass="mb-16"/>
				<InputApp optionalClass="mb-16"/>
				<div className="home-form__multiple home-form__multiple--check">
					<CheckBoxApp/>
					<p className="home-form__text-check">Acepto la <span className="home-form__text-underline">Política de
						Protecciòn de Datos Personales</span> y los 
						<span className="home-form__text-underline">Términos y Condiciones.</span>
					</p>
				</div>
				
				<BtnApp title="cotízalo"/>
			</form>
		</div>
	)
}
