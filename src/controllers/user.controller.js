import User from "../models/User.js";

const findAll = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const uptadeUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      res.status(400).send({ message: "Submit at least one field for uptade" });
    }

    await User.findOneAndUpdate({ _id: id }, { name, email, password });

    res.send({ message: "User successfully uptade" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.findByIdAndDelete(id);

    res.send({ message: "User successfully deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { findAll, findById, uptadeUser, removeUser };
