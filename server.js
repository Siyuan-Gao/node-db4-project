const express = require('express');

// const RecipeRouter = require("./routers/recipe-router");
// const IngredientRouter = require('./routers/ingredient-router');

const server = express();

server.use(express.json());
// server.use( RecipeRouter);
// server.use( IngredientRouter);

module.exports = server;