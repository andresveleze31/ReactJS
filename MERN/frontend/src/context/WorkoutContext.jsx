import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutProvider = ({ children }) => {

        const [workouts, setWorkouts] = useState([]);
  return <WorkoutsContext.Provider value={{setWorkouts, workouts

  }}>{children}</WorkoutsContext.Provider>;
};
