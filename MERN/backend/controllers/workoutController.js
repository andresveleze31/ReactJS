import { mongo } from "mongoose";
import Workout from "../models/Workout.js";
import mongoose from "mongoose";

//Obtener Workouts
async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

//Obtener un Workout.

async function getWorkout(req, res) {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

//Crear un Workout
async function createWorkout(req, res) {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

//Eliminar un Workout
async function deleteWorkout(req, res) {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

//Actualizar un Workout

async function updateWorkout(req, res) {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout };
