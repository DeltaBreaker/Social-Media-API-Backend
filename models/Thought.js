const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => formatDate(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

function formatDate(input) {
  let date = new Date(input);
  return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
