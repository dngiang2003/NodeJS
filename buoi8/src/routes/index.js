const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const classroomRouter = require("./classroom.route");
const loginUser = require("./auth.route");

const routes = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: '/classrooms',
    route: classroomRouter
  },
  {
    path: '/',
    route: loginUser
  }
];

routes.map((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
