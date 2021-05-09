import { AutoDataSteps } from "../auto-data/AutoDataSteps"
import { ArmPlanHeader } from "./ArmPlanHeader"
import { ArmPlanOffOn } from "./ArmPlanOffOn"

export const ArmPlanScreen = () => {
	return (
		<>
			<AutoDataSteps/>
			<ArmPlanHeader/>
			<ArmPlanOffOn/>
		</>
	)
}
