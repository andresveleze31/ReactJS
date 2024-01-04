import axios from 'axios';
import React from 'react'
import useWorkout from '../hook/useWorkout';

function WorkoutDetails({workout}) {

    const {workouts, setWorkouts} = useWorkout();

    async function handleClick(){
        try {
            const { data } = await axios.delete(
              `http://localhost:4000/api/workouts/${workout._id}`
            );
            console.log(data);

            const newWorkout = workouts.filter(w => {
                return w._id !== workout._id;
            })

            setWorkouts(newWorkout);
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="bg-white p-[2rem] mb-[2rem] ">
      <h3 className="text-green-400 font-bold">{workout.title}</h3>
      <p className="text-gray-700">
        <span className="font-bold ">Load Kg: </span>
        {workout.load}{" "}
      </p>
      <p className="text-gray-700">
        <span className="font-bold ">Reps: </span>
        {workout.reps}{" "}
      </p>
      <p className="text-gray-700">{workout.createdAt}</p>
      <button onClick={handleClick} className='bg-green-400 p-[1rem] mt-[1rem] text-white uppercase'>Eliminar</button>
    </div>
  );
}

export default WorkoutDetails
