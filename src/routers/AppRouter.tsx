import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { HeaderApp } from '../components/shared/HeaderApp';
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
				<Switch>
					<PublicRouter path="/registro"/>
					<PrivateRouter path="/"/>
					<Redirect to="/registro"/>
				</Switch>
			</Router>
		</>
	)
}
