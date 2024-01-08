import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutProvider = ({ children }) => {

  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({});
  return <WorkoutsContext.Provider value={{setWorkouts, workouts, workout, setWorkout

  }}>{children}</WorkoutsContext.Provider>;
};
