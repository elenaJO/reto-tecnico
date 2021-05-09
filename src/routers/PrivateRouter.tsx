import { Route } from 'react-router-dom'
import { VehicleRouter } from './VehicleRouter'
type RouteArgs = {
	path: string
}

export const PrivateRouter = ({ path }: RouteArgs) => {
	return (
		<Route path={path}>
			<VehicleRouter/>
    </Route>
	)
}