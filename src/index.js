const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");

const { PORT } = require("./config/serverConfig");

const UserRepository = require("./repository/user-repository");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
    // const repo = new UserRepository();
    // const resp = await repo.getById(1);
    // console.log(resp);
  });
};

prepareAndStartServer();
