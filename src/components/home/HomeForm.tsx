import { CheckBoxApp } from "../shared/CheckBoxApp"
import { InputApp } from "../shared/InputApp"
import { BtnApp } from '../shared/buttons/BtnApp';
import { SelectApp } from "../shared/SelectApp";
import { useForm } from '../../hooks/useForm'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { startRegister } from "../../actions/auth";
import { DocumentOptions } from "../../utils/dataEnum";

export const HomeForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [showError, setshowError] = useState(false);

	const handleInputChangeForm = (e: any) => {
		handleInputChange(e);
	}

	const handleCheckForm = (e: any) => {
		handleInputChange({
			target: {
				name: e.target.name,
				value: e.target.checked
			}
		});
	}

	const handleLogin = (e) => {
		e.preventDefault();
		setshowError(true);
		if (isFormValid()) {
			dispatch(startRegister(documentNumber, phone, license));
			history.push('/datos-auto');
		}
	}

	const isFormValid = () => {
		if (typeDocument === 'dni' && documentNumber.trim().length !== 8) {
			return false;
		}
		if (phone.trim().length !== 9) {
			return false;
		}
		if (license.trim().length !== 6) {
			return false;
		}
		return accept;
	}

	const [ formValues, handleInputChange ] = useForm({
		documentNumber: '',
		phone: '',
		license: '',
		typeDocument: 'dni',
		accept: false,
	});

	const { documentNumber, phone, license, typeDocument, accept } = formValues;

	return (
		<div className="home-form">
			<h2 className="home-form__title">Déjanos tus datos</h2>
			<form onSubmit={ handleLogin }>
				<div className="mb-16 home-form__multiple">
					<SelectApp
						value={typeDocument}
						optionalClass="home-form__select"
						name="typeDocument"
						handleSelectChange={ handleInputChangeForm }
						items={DocumentOptions}
						group
					/>
					<InputApp 
						optionalClass="home-form__input"
						type="text"
						placeholder="Nro. de doc"
						name="documentNumber"
						value={ documentNumber }
						handleInputChange={ handleInputChangeForm }
						hasError={showError && (typeDocument === 'dni' && documentNumber.trim().length !== 8)}
						errorMessage="Debe ser 8 digitos"
						group
					/>
				</div>
				<InputApp 
					optionalClass="mb-16"
					type="text"
					placeholder="Celular"
					name="phone"
					value={ phone }
					handleInputChange={ handleInputChangeForm }
					hasError={showError && phone.length !== 9}
					errorMessage="Debe ser 9 digitos"
				/>
				<InputApp 
					optionalClass="mb-16"
					type="text"
					placeholder="Placa"
					name="license"
					value={ license }
					handleInputChange={ handleInputChangeForm }
					hasError={showError && license.length !== 6}
					errorMessage="Debe ser 6 digitos"
				/>
				<div className="home-form__multiple home-form__multiple--check">
					<CheckBoxApp
						handleCheckChange={ handleCheckForm }
						name="accept"
						checked={ accept }
					/>
					<p className="home-form__text-check">Acepto la <span className="home-form__text-check home-form__text-underline">Política de
						Protecciòn de Datos Personales</span> y los 
						<span className="home-form__text-check home-form__text-underline"> Términos y Condiciones.</span>
					</p>
				</div>
				{
					!accept && showError && (
						<p className="has-error mb-16">Debe aceptar política, terminos y condiciones</p>
					)
				}
				<BtnApp 
					title="cotízalo"
					type="submit"
					disabled={ false }
				/>
			</form>
		</div>
	)
}
