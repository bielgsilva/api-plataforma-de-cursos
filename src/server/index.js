require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("../routes/healthCheck");
const userRoutes = require("../routes");

app.use(express.json());
app.use(cors());

// Teste de rotas
app.use(routes);

// Rotas de usuários
app.use(userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
