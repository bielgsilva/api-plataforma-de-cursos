const express = require("express");
const routes = express();

routes.get("/api", (request, response) => {
  return response.json({ message: "Server is Running" });
});

module.exports = routes;
