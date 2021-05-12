import { AutoDataSteps } from "../auto-data/AutoDataSteps"
import { ArmPlanHeader } from "./ArmPlanHeader"
import { ArmPlanOffOn } from "./ArmPlanOffOn"
import { ArmPlanTotal } from "./ArmPlanTotal"

export const ArmPlanScreen = () => {
	return (
		<>
			<AutoDataSteps
				step={2}
				totalStep={2}
			/>
			<ArmPlanHeader/>
			<ArmPlanOffOn/>
			<ArmPlanTotal/>
		</>
	)
}
