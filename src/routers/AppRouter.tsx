import { PublicRouter } from './PublicRouter';
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
						<PublicRouter path="/vehicle"/>
						<Redirect to="/vehicle"/>
					</Switch>
				</Router>
			</>
		</>
	)
}
