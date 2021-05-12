import { Route, Switch } from 'react-router-dom'
import { ArmPlanScreen } from '../components/arm-plan/ArmPlanScreen';
import { AutoDataScreen } from '../components/auto-data/AutoDataScreen';
import { WelcomeScreen } from '../components/welcome/WelcomeScreen';

export const VehicleRouter = () => {
	return (
		<>
			<Switch>
				<Route exact path="/datos-auto" component={ AutoDataScreen }/>
				<Route exact path="/arma-plan" component={ ArmPlanScreen }/>
				<Route exact path="/bienvenido" component={ WelcomeScreen }/>
			</Switch>
		</>
	)
}
