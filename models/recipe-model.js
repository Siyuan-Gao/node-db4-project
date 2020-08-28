const db = require('../data/config');

// getRecipes
function getRecipes() {
	return db('recipe AS r');
}
function getRecipesByID(recipe_id) {
	return db('recipe AS r').where('id', recipe_id).first();
}

function getShoppingList(id) {
  return db("recipe_ingredients as rs")
    .join("ingredients as i", "rs.ingredient_id", "i.id")
    .select("i.name", "rs.quantity", "rs.unit_measurement")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("instructions as i")
    .join("recipe as r", "i.recipe_id", "r.id")
    .select("i.step_number", "i.step")
    .where({ recipe_id: id });
}

module.exports = {
	getRecipes,
	getRecipesByID,
	getShoppingList,
	getInstructions,
};
