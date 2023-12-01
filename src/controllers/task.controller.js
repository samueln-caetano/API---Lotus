import User from "../models/User.js";
import Task from "../models/Task.js";

const addTask = async (req, res) => {
  try {
    const userId = req.params.userId;
    const taskData = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const newTask = new Task({
      userId: userId,
      title: taskData.title,
    });

    user.tasks.push(newTask);
    await user.save();

    res.status(201).json({ message: "Task created successfully", user: user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const tasks = await user.tasks;
    res.send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const task = user.tasks.find((task) => {
      return task._id == taskId;
    });

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    res.send(task);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const taskData = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const task = user.tasks.find((task) => {
      return task._id == taskId;
    });

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    task.title = taskData.title;

    await user.save();

    console.log(task);

    res.send({ message: "Task successfully updated" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const removeTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const task = user.tasks.find((task) => {
      return task._id == taskId;
    });

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    user.tasks.pull(task);

    await user.save();

    res.send({ message: "Task successfully deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { addTask, findAll, findById, updateTask, removeTask };
