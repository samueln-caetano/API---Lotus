import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Task = mongoose.model("Task", taskSchema);
