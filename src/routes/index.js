const express = require("express");
// const { validateClientRequest } = require('../middlewares/clientsMiddleware');
const { selectAllUser, createUser, loginUser, updateUsers, checkEmail, getUser } = require("../controllers/usersControllers");
const userRoutes = express();


userRoutes.get('/select', selectAllUser);
userRoutes.get('/get-user', getUser)

userRoutes.post("/users/check-email", checkEmail);
userRoutes.post('/new-user', createUser);

userRoutes.post("/login", loginUser);

userRoutes.put("/users/edit/profile/:id", updateUsers);

module.exports = userRoutes;








// userRoutes.put('/empresas/:id', async (req, res) => {
//   const { id } = req.params;
//   const { nome, site } = req.body;

//   try {
//     await knex('empresas').where({ id }).update({ nome, site });
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Erro ao fazer a requisição ao banco de dados:', error);
//     res.status(500).json({ erro: 'Erro ao atualizar a empresa' });
//   }
// });


// userRoutes.delete('/empresas/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     await knex('empresas').where({ id }).del();
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Erro ao fazer a requisição ao banco de dados:', error);
//     res.status(500).json({ erro: 'Erro ao deletar a empresa' });
//   }
// });



