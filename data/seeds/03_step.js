exports.seed = async function (knex) {
	await knex('step').insert([
      // Turkey Sandwich
		{
			id: 1,
			step_number: 1,
			instructions:
				'Wash and clice the lettuce',
			recipe_id: 1,
		},
		{
			id: 2,
			step_number: 2,
			instructions:
				'Spread mayonnaise on the one side of the bread.',
			recipe_id: 1,
		},
		{
			id: 3,
			step_number: 3,
			instructions:
				'place lettuce and sliced turkey onto the mayonnasie,fold the bread together.',
			recipe_id: 1,
		},
		{
			id: 4,
			step_number: 4,
			instructions:
				'preheat oven to 400 degress, Grease muffin cups or line with muffin liners.',
			recipe_id: 1,
    },
    		// Blueberry Muffins
		{
			id: 5,
			step_number: 1,
			instructions:
				'Combine flour and baking powder. Place oil into a cup; add the egg and add enough milk . Mix this with flour mixture. Fold in blueberries. Fill muffin cups right to the top.',
			recipe_id: 2,
		},
		{
			id: 6,
			step_number: 2,
			instructions:
				'In a large bowl, toss the oats with the almonds. Add the cocoa mixture and toss to combine.',
			recipe_id: 2,
		},
		{
			id: 7,
			step_number: 3,
			instructions:
				'Bake flour mixture until toasty and crisp to 1 hour, make sure it’s toasting evenly.',
			recipe_id: 2,
		},
		{
			id: 8,
			step_number: 4,
			instructions:
				'Let cool to room temperature and then stir in the chocolate chunks. Transfer the finished granola to airtight containers; it will keep for up toa week.',
			recipe_id: 2,
		},
	]);
};