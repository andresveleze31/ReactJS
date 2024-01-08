import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useWorkout from '../hook/useWorkout';

function WorkoutForm() {

  const {workouts, setWorkouts, workout} = useWorkout();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  useEffect(() => {
    if(Object.keys(workout).length > 0){
      setTitle(workout.title);
      setLoad(workout.load);
      setReps(workout.reps);
    }
  }, [workout])

  async function handleSubmit(e){
    e.preventDefault();

    if(Object.keys(workout).length > 0){
      const { data } = await axios.put(
        `http://localhost:4000/api/workouts/${workout._id}`, {
          title, load, reps
        }
      );

      const workoutNew = workouts.map(w => {
        if(w._id == workout._id){
          w.title = title;
          w.load = load;
          w.reps = reps;
        }
        return w;
      })

      console.log(workoutNew);

      setWorkouts(workoutNew);
    }
    else{
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/workouts/create",
        {
          title,
          load,
          reps,
        }
      );
      console.log(data);
      setWorkouts([data, ...workouts]);
    } catch (error) {
      console.log(error);
    }
    }
  }


  return (
    <div className="bg-white  p-[2rem] ">
      <p className="text-green-400 font-bold">Add a New Wokout</p>
      <form onSubmit={handleSubmit}>
        <div className="mt-[1rem]">
          <label
            className="text-gray-700 font-bold uppercase block"
            htmlFor="title"
          >
            Title
          </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="p-[1rem] mt-[1rem] border w-full border-gray-400 "
            id="title"
            type="text"
            placeholder="Excersize Title"
          />
        </div>
        <div className="mt-[1rem]">
          <label
            className="text-gray-700 font-bold uppercase block"
            htmlFor="load"
          >
            Load
          </label>
          <input
            value={load}
            onChange={(e) => {
              setLoad(e.target.value);
            }}
            className="p-[1rem] mt-[1rem] border w-full border-gray-400 "
            id="load"
            type="number"
            placeholder="Load of the exersize"
          />
        </div>
        <div className="mt-[1rem]">
          <label
            className="text-gray-700 font-bold uppercase block"
            htmlFor="reps"
          >
            Reps
          </label>
          <input
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
            className="p-[1rem] mt-[1rem] border w-full border-gray-400 "
            id="reps"
            type="number"
            placeholder="Reps of the Excersize "
          />
        </div>

        <input
          className="text-white uppercase bg-green-400 w-full py-[1rem] mt-[1rem] font-bold cursor-pointer "
          type="submit"
          value={Object.keys(workout).length > 0 ? "Update" : "Add Workout"}
        />
      </form>
    </div>
  );
}

export default WorkoutForm;
