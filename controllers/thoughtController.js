const { User, Thought, Reaction } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .then(async (thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtID })
      .select("-__v")
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtID }, req.body, {
      new: true,
    }).then((thought) =>
      !thought
        ? res.status(404).json({ message: "Thought not found" })
        : res.json(thought)
    );
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtID }).then((thought) => {
      !thought
        ? res.status(404).json({ message: "That thought doesnt exist" })
        : res.status(404).json({ message: "Thought deleted" });
    });
  },

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $addToSet: { reactions: req.body } },
      { new: true }
    ).then((thought) =>
      !thought
        ? res.status(404).json({ message: "Thought not found" })
        : res.json(thought)
    );
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      {
        $pull: {
          reactions: { reactionId: req.params.reactionID },
        },
      },
      { new: true }
    ).then((thought) =>
      !thought
        ? res.status(404).json({ message: "Thought not found" })
        : res.json(thought)
    );
  },
};
