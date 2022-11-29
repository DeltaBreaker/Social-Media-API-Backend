const router = require("express").Router();

const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtID")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtID/reactions").post(createReaction);

router.route("/:thoughtID/reactions/:reactionID").delete(deleteReaction);

module.exports = router;
