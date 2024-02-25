import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import Workoutdetails from '../components/Workoutdetails'
import WorkoutForm from '../components/WorkoutForm'



const Home = () => {
    const{workouts,dispatch}=useWorkoutsContext()

    useEffect(() => {
        const fetchworkouts=async()=>{
            const response= await fetch('/api/workouts')
            const json= await response.json()

            if(response.ok){
                dispatch({type:'SET_WORKOUT', payload:json})
            }
        }

        fetchworkouts()
    },[dispatch])
    
    return(
        <div className="home">
            <div className='workouts'>
                {workouts&& workouts.map((workout)=>(
                    <Workoutdetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home