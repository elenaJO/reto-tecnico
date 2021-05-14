import imgOne from '../../assets/icons/icon_theft.svg';
import imgTwo from '../../assets/icons/icon_damage.svg';
import imgThree from '../../assets/icons/icon_perdidatotal.svg';
import iconDown from '../../assets/icons/check_purple.svg';
import iconTop from '../../assets/icons/check_top.svg';
import { SwitchApp } from '../shared/SwitchApp';
import { useDispatch, useSelector } from 'react-redux';
import { setCoverageAmountAc } from '../../actions/amount';
import { amounts } from '../../utils/dataEnum';
import { addCoverageAc } from '../../actions/auth';
import { useState } from 'react';

export const ArmPlanTab = () => {
	const dispatch = useDispatch();
	const { partialTheft, trafficAccident, totalLoss } = useSelector((state: any) => state.auth);

	const handleCheckPartial = (e: any) => {
		const modAmount = e.target.checked ? amounts[e.target.name] : (amounts[e.target.name] * -1);
		const index = tabs.findIndex(t => t.name === e.target.name);
		const newT = [...tabs];
		newT[index].value = e.target.checked;
		setTabs(newT);
		dispatch(setCoverageAmountAc(modAmount));
		dispatch(addCoverageAc(e.target.name, e.target.checked));
	}

	const [tabs, setTabs] = useState([
		{
			id: 1,
			title: 'LLanta robada',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'partialTheft',
			value: partialTheft || false,
			open: false,
			image: imgOne,
		},
		{
			id: 2,
			title: 'Choque y/o pasarte la luz roja',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'trafficAccident',
			value: trafficAccident || false,
			open: false,
			image: imgTwo,
		},
		{
			id: 3,
			title: 'Atropello en la vía Evitamiento',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'totalLoss',
			value: totalLoss || false,
			open: false,
			image: imgThree,
		}
	])

	const changeTabs = (index: number) => {
		const newT = [...tabs];
		newT[index].open = !tabs[index].open;
		setTabs(newT);
	}

	

	return (
		<div className="arm-plan-tab">
			<div className="arm-plan-tab__titles">
				<div className="arm-plan-tab__title arm-plan-tab__title--active">
					Protege a tu auto
				</div>
				<div className="arm-plan-tab__title">
					Protege a los que te rodean
				</div>
				<div className="arm-plan-tab__title">
					Mejora tu plan
				</div>
			</div>
			<div className="arm-plan-tab__content">
				{tabs && tabs.map((tab, index) => (
					<div className="arm-plan-tab__content-tab" key={ tab.id }>
						<div className="arm-plan-tab__content-tab--title">
							<div className="arm-plan-tab__content-tab--title-img">
								<img src={tab.image} alt="" />
								<span className="arm-plan-tab__content-tab__case">{ tab.title }</span>
							</div>
							<SwitchApp
								name={ tab.name }
								handleCheckChange={ handleCheckPartial }
								checked={ tab.value || false}
							/>
						</div>
						<div className="arm-plan-tab__content-tab__content-text">
							<p 
								className={`arm-plan-tab__content-tab__paragraph mb-16 ${!tab.open ? 'not-show': ''}`}
							>
								{ tab.text }
							</p>
							<button 
								className="arm-plan-tab__content-tab__btn"
								onClick={ () => changeTabs(index)}
							>
								<span 
									className={ `arm-plan-tab__content-tab__btn-title ${tab.open ? 'down' : ''}`}
								>
									VER { tab.open ? 'MENOS' : 'MÁS'}
								</span>
								<img src={tab.open ? iconTop: iconDown} alt="check" />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
