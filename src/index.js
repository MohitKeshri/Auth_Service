const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");

const { PORT } = require("./config/serverConfig");

const UserRepository = require("./repository/user-repository");
const UserService = require("./services/user-service");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);
    // const ser = new UserService();
    // const newToken = ser.createToken({ email: "mohit@admin.com", id: 2 });
    // console.log(newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaGl0QGFkbWluLmNvbSIsImlkIjoyLCJpYXQiOjE3MjQ0MDI4NjgsImV4cCI6MTcyNDQ4OTI2OH0.X3C4Bg_P4PQ2lmb60wnbG57oaIIKpFMqYJlBWC-2ieY";
    // const response = ser.verifyToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
