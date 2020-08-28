
exports.up = async function(knex) {
  await knex.schema.createTable("recipe",(table)=>{
    table.increments("id")
    table.text("name").notNull().uniqe()
    table.text("description").notNull()
  })

    await knex.schema.createTable("ingredient",(table)=>{
      table.increments("id")
      table.time("preptTime").notNull()
      table.text("preparetion").notNull()
      .integer("ingredient_id")
			.references("id")
      .inTable("recipe")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredient")
	await knex.schema.dropTableIfExists("recipe")
};
