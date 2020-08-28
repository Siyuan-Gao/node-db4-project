exports.seed = async function (knex) {
	await knex('ingredient').insert([
		{ id: 1, name: 'bread' },
		{ id: 2, name: 'turkey slices' },
		{ id: 3, name: 'lettuce,' },
		{ id: 4, name: 'mayonnaise' },
		{ id: 5, name: 'blueberries' },
		{ id: 6, name: 'egg' },
		{ id: 7, name: 'baking powder' },
		{ id: 8, name: 'flour' },
	]);
};