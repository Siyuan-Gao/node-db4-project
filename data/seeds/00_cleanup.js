  
exports.seed = async function(knex) {
  await knex("recipe_ingredient").truncate()
  await knex("step").truncate()
	await knex("ingredient").truncate()
	await knex("recipe").truncate()
}