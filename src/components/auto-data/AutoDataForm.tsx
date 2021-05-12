
import { useSelector, useDispatch } from 'react-redux';

import { BtnApp } from "../shared/buttons/BtnApp"
import { RadioBtnApp } from "../shared/RadioBtnApp"
import { SelectApp } from "../shared/SelectApp"
import imgCar from '../../assets/images/car.svg';
import { CounterApp } from "../shared/CounterApp";
import { useForm } from '../../hooks/useForm';
import { ModelOptions, YearOptions } from '../../utils/dataEnum';
import { setSumAssuredAc } from '../../actions/amount';

export const AutoDataForm = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state: any) => state.auth);
	const { setSumAssured } = useSelector((state: any) => state.amount);

	const [ formValues, handleInputChange ] = useForm({
		year: '',
		model: '',
		gas: 'si',
	});

	const { year, model, gas } = formValues;

	const handleInputChangeForm = (e: any) => {
		handleInputChange(e);
	}

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(year, model, gas, e);
	}

	const handleChangeValue = (value: number) => {
		console.log(value);
		dispatch(setSumAssuredAc(value));
	}
	
	return (
		<form className="auto-data-form" onSubmit={ handleLogin }>
			<h2 className="auto-data-form__text">¡Hola, <span className="auto-data-form__text auto-data-form__text--name">{name}!</span>
			</h2>
			<p className="auto-data-form__info">Completa los datos de tu auto</p>
			<div>
				<SelectApp 
					optionalClass="mb-16"
					value={year}
					name="year"
					items={YearOptions}
					placeholder="Año"
					handleSelectChange={ handleInputChangeForm }
				/>
				<SelectApp
					value={model}
					name="model"
					items={ModelOptions}
					placeholder="Marca"
					handleSelectChange={ handleInputChangeForm }
				/>
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
					<RadioBtnApp 
						optionalClass="radio-right"
						name="gas"
						value="si"
						checked={ gas === 'si' }
						handleCheckChange={handleInputChangeForm}
					/>
					<RadioBtnApp
						name="gas"
						value="no"
						checked={ gas === 'no' }
						handleCheckChange={handleInputChangeForm}
					/>
				</div>
			</div>
			<div>
				<p className="auto-data-form__text--small">Indica la suma asegurada</p>
				<div className="mb-16">
					<span className="auto-data-form__price text-left">MIN $12.500 </span>
					<span className="auto-data-form__price text-right">MAX $16,500</span>
				</div>
			</div>
			<CounterApp 
				numberAdd={ 100 }
				minorRank={ 12500 }
				higherRank={ 16500 }
				initialValue={ setSumAssured }
				handleChangeValue={ handleChangeValue }
			/>
			<BtnApp 
				title="continuar"
				type="submit"
			/>
		</form>
	)
}
