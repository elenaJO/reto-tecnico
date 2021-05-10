import { AppRouter } from "./routers/AppRouter"
import { Provider } from 'react-redux';
import { store } from './store/store';

export const VehicleApp = () => {
	return (
		<div>
			<Provider store={ store }>
				<AppRouter/>
			</Provider>
		</div>
	)
}
