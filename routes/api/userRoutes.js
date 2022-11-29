const router = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");

router.route("/").get(getUsers).post(createUser);

router.route("/:userID").get(getUser).put(updateUser).delete(deleteUser);

router.route("/:userID/friends").post(addFriend);

router.route("/:userID/friends/:friendID").delete(removeFriend);

module.exports = router;
