const express = require("express");
const UserController = require("../../controllers/user-controller");
const { AuthRequestValidator } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidator.ValidateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidator.ValidateUserAuth,
  UserController.signIn
);

module.exports = router;
