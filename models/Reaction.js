const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => formatDate(date),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function formatDate(input) {
    let date = new Date(input);
    return (
      date.getUTCDate() +
      "-" +
      (date.getUTCMonth() + 1) +
      "-" +
      date.getFullYear()
    );
  }

module.exports = reactionSchema;