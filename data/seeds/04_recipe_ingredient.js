exports.seed = async function (knex) {
	await knex('recipe_ingredient').insert([
		// Turkey Sandwich
		{ recipe_id: 1, ingredient_id: 1, qty: 2.0, amount: 'slice' },
		{ recipe_id: 1, ingredient_id: 2, qty: 4.0, amount: 'slice' },
		{ recipe_id: 1, ingredient_id: 3, qty: 5.0, amount: 'oz' },
		{ recipe_id: 1, ingredient_id: 4, qty: 1.0, amount: 'tablespoon' },
		//Muffins
		{ recipe_id: 2, ingredient_id: 5, qty: 0.5, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 6, qty: 2.0, amount: 'whole' },
		{ recipe_id: 2, ingredient_id: 7, qty: 0.5, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 8, qty: 0.25, amount: 'cup' },
	]);
};