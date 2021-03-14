const Poi = require("./app/controllers/poi");

module.exports = [
  { method: "GET", path: "/", config: Poi.index },
  { method: "GET", path: "/signup", config: Poi.signup },
  { method: "GET", path: "/login", config: Poi.login },
  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
  },
];
