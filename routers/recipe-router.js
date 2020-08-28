const express = require('express');
const db = require('../models/recipe-model');

const router = express.Router();

// routes
router.get('/recipe', async (req, res, next) => {
	try {
		const recipe = await db.getRecipes();
		res.status(200).json(recipe);
	} catch (err) {
		next(err);
	}
});

router.get('/recipe/:id', async (req, res, next) => {
	try {
		const recipe = await db.getRecipesByID(req.params.id);
		res.status(200).json(recipe);
	} catch (err) {
		next(err);
	}
});
router.get('/recipe/:id/instructions', async (req, res, next) => {
	try {
		const step = await db.getInstructions(req.params.id);
		res.status(200).json(step);
	} catch (err) {
		next(err);
	}
});
router.get('/recipe/:id/shoppingList', async (req, res, next) => {
	try {
		const list = await db.getShoppingList(req.params.id);
		res.status(200).json(list);
	} catch (err) {
		next(err);
	}
});

module.exports = router;