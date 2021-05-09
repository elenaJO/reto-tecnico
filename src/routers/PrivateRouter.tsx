import { Route } from 'react-router-dom'
type RouteArgs = {
	path: string,
	exact?: boolean,
}

export const PrivateRouter = ({ path, exact }: RouteArgs) => {
	return (
		<Route path={path} exact={exact}>
			<h1>ahaha</h1>
    </Route>
	)
}