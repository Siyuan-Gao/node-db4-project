  
exports.up = async function (knex) {
	await knex.schema.createTable('recipe', (table) => {
		table.increments('id');
		table.text('name').notNull();
	});
	await knex.schema.createTable('ingredient', (table) => {
		table.increments('id');
    table.text('name').notNull().unique();
	});
	await knex.schema.createTable('step', (table) => {
		table.increments('id');
		table.integer('step_number').notNull();
		table.text('instructions').notNull();
		// create FK
		table
			.integer('recipe_id')
			.notNull()
			.references('id')
			.inTable('recipe');
	});
	await knex.schema.createTable('recipe_ingredient', (table) => {
		table
			.integer('recipe_id')
			.notNull()
			.references('id')
			.inTable('recipe')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('ingredient_id')
			.notNull()
			.references('id')
			.inTable('ingredient')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.float('qty').notNull();
		table.text('amount').notNull();
		// creates PK out of two FK
		table.primary(['recipe_id', 'ingredient_id']);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('recipe_ingredient');
	await knex.schema.dropTableIfExists('step');
	await knex.schema.dropTableIfExists('ingredient');
	await knex.schema.dropTableIfExists('recipe');
};
