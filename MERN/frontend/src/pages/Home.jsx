import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import useWorkout from '../hook/useWorkout';
function Home() {


    const {workouts, setWorkouts} = useWorkout();

    useEffect(() => {
        async function fetchWorkouts(){
            const { data } = await axios.get(
              "http://localhost:4000/api/workouts"
            );
            console.log(data);
            setWorkouts(data);
        }
        fetchWorkouts();
    }, [])

  return (
    <div className="contenedor grid grid-cols-[2fr,1fr] gap-[5rem] ">
      <div>
        {workouts.map((workout) => {
          return <WorkoutDetails key={workout._id} workout={workout} />;
        })}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home
