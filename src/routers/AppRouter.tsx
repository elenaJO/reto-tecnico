import { PublicRouter } from './PublicRouter';
// import { PrivateRouter } from './PrivateRouter';
import { HeaderApp } from '../components/shared/HeaderApp';
import { AutoDataScreen } from '../components/auto-data/AutoDataScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export const AppRouter = () => {
	return (
		<>
			<Router>
				<HeaderApp/>
				<Switch>
					<PublicRouter path="/registro"/>
					<Route exact path="/datos-auto" component={ AutoDataScreen }/>
					{/* <PrivateRouter path="/"/> */}
					<Redirect to="/registro"/>
				</Switch>
			</Router>
		</>
	)
}
