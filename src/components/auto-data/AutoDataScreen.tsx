import { FooterApp } from "../shared/FooterApp"
import { AutoDataForm } from "./AutoDataForm"
import { AutoDataSteps } from "./AutoDataSteps"

export const AutoDataScreen = () => {
	return (
		<>
			<AutoDataSteps
				step={1}
				totalStep={2}
			/>
      <AutoDataForm/>
			<FooterApp/>
		</>
	)
}
