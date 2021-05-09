import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { HeaderApp } from '../components/shared/HeaderApp';
import {
  BrowserRouter as Router,
  Switch,
	Redirect
} from 'react-router-dom';

export const AppRouter = () => {
	return (
		<>
			<HeaderApp/>
			<>
				<Router>
					<Switch>
						<PublicRouter path="/register"/>
						<PrivateRouter path="/" exact/>
						<Redirect to="/register"/>
					</Switch>
				</Router>
			</>
		</>
	)
}
