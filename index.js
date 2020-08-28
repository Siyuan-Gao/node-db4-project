const express = require('express');
const recipeRouter = require('./routers/recipe-router')

const server = express();
const PORT = process.env.PORT || 4000;
server.use('/api', recipeRouter);


server.get('/', (req, res) => {
	res.json({
		message:"Welcome to allrecipes",
	});
});

// ERROR HANDLING
server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});



server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});