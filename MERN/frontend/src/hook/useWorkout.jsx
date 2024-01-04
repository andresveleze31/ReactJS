import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

const useWorkout = () => {
  return useContext(WorkoutsContext);
};

export default useWorkout;
