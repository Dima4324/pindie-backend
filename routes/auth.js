const authRouter = require("express").Router();
const { login } = require("../controllers/auth");

authRouter.post("/auth/login", login);

authRouter.post("/auth/local", login);

module.exports = authRouter;
