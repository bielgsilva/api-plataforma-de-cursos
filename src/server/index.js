require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("../routes/healthCheck");
const userRoutes = require("../routes");

app.use(express.json());
app.use(cors());

//teste de rotas
app.use("/api/routes", routes);

//rotas de usuarios
app.use("/api/userRoutes", userRoutes);

app.listen(process.env.PORT || 3000);


