import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"


export function useWorkoutsContext() {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error('Its not used')
    }


    return context
}