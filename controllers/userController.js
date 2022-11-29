const { User, Thought, Reaction } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then(async (users) => {
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getUser(req, res) {
    User.findOne({ _id: req.params.userID })
      .select("-__v")
      .lean()
      .then(async (student) =>
        !student
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(student)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userID }, req.body).then(
      (student) =>
        !student
          ? res.status(404).json({ message: "User not found" })
          : res.json(student)
    );
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userID }).then((user) => {
      !user
        ? res.status(404).json({ message: "That user doesnt exist" })
        : res.status(404).json({ message: "User deleted" });
    });
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userID },
      { $addToSet: { friends: req.body } }
    ).then((student) =>
      !student
        ? res.status(404).json({ message: "User not found" })
        : res.json(student)
    );
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userID },
      { $pull: { friends: req.params.friendID } }
    ).then((student) =>
      !student
        ? res.status(404).json({ message: "User not found" })
        : res.json(student)
    );
  },
};
