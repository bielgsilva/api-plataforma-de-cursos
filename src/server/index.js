const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../routes/healthCheck");
const userRoutes = require("../routes");

app.use(express.json());
app.use(cors());

//teste de rotas
app.use(routes);

//rotas de usuarios
app.use(userRoutes);

module.exports = app;
