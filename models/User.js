const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought.js");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validateEmail,
    },
    thoughts: [thoughtSchema],
    friends: [this],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = model("user", userSchema);

module.exports = User;
