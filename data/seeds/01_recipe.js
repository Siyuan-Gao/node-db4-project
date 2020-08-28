exports.seed = async function(knex) {
	await knex("recipe").insert([   
    { id: 1, name: "Turkey Sandwich" },
    { id: 2, name: "Blueberry Muffins" },
	])
}