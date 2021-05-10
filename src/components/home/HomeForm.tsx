import { CheckBoxApp } from "../shared/CheckBoxApp"
import { InputApp } from "../shared/InputApp"
import { BtnApp } from '../shared/buttons/BtnApp';
import { SelectApp } from "../shared/SelectApp";
import { useForm } from '../../hooks/useForm'

export const HomeForm = () => {

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
		console.log('hahah');
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
					/>
					<InputApp 
						optionalClass="home-form__input"
						type="text"
						placeholder="Nro. de doc"
						name="documentNumber"
						value={ documentNumber }
						handleInputChange={ handleInputChangeForm }
					/>
				</div>
				<InputApp 
					optionalClass="mb-16"
					type="text"
					placeholder="Celular"
					name="phone"
					value={ phone }
					handleInputChange={ handleInputChangeForm }
				/>
				<InputApp 
					optionalClass="mb-16"
					type="text"
					placeholder="Placa"
					name="license"
					value={ license }
					handleInputChange={ handleInputChangeForm }
				/>
				<div className="home-form__multiple home-form__multiple--check">
					<CheckBoxApp
						handleCheckChange={ handleCheckForm }
						name="accept"
						checked={ accept }
					/>
					<p className="home-form__text-check">Acepto la <span className="home-form__text-underline">Política de
						Protecciòn de Datos Personales</span> y los 
						<span className="home-form__text-underline">Términos y Condiciones.</span>
					</p>
				</div>
				<BtnApp 
					title="cotízalo"
					type="submit"
					disabled={ false }
				/>
			</form>
		</div>
	)
}
