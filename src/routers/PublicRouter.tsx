import { Route } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
type RouteArgs = {
	path: string
}

export const PublicRouter = ({ path }: RouteArgs) => {
	return (
		<Route path={path}>
      <HomeScreen/>
    </Route>
	)
}
