import { HeaderApp } from '../components/shared/HeaderApp';
import { AutoDataScreen } from '../components/auto-data/AutoDataScreen';
import { Route } from 'react-router-dom';
import { ArmPlanScreen } from '../components/arm-plan/ArmPlanScreen';
import { WelcomeScreen } from '../components/welcome/WelcomeScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import ScrollToTop from '../components/shared/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

export const AppRouter = () => {
	return (
		<>
			<Router>
				<HeaderApp/>
				<ScrollToTop />
				<Switch>
					<Route exact path="/registro" component={ HomeScreen }/>
					<Route exact path="/datos-auto" component={ AutoDataScreen }/>
					<Route exact path="/arma-plan" component={ ArmPlanScreen }/>
					<Route exact path="/bienvenido" component={ WelcomeScreen }/>
					<Redirect to="/registro"/>
				</Switch>
			</Router>
		</>
	)
}
