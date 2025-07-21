const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// This route will handle POST requests to /api/recipes/generate
router.post('/generate_recipe', recipeController.generateRecipe);

module.exports = router;