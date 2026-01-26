// src/api/recipeService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/generate-recipe'; // Your backend URL

export const fetchRecipe = async (query) => {
  console.log(`Simulating API call for: "${query}"`);
  await new Promise(resolve => setTimeout(resolve, 4000));

  if (!query.toLowerCase().includes('fail')) {
    // The mock now returns a stringified JSON, just like the real Gemini API might
    return JSON.stringify({
      name: `AI-Generated ${query}`,
      description: "A delicious and creative recipe generated just for you by our AI chef. It's designed to be easy to follow and incredibly tasty.",
      prepTime: "15 minutes",
      cookTime: "25 minutes",
      servings: "4 servings",
      ingredients: [
        { name: "Main Ingredient based on Query", quantity: "2 cups", notes: "fresh" },
        { name: "Aromatic Spice", quantity: "1 tbsp", notes: "ground" },
        { name: "Hearty Vegetable", quantity: "1 large", notes: "diced" },
        { name: "Essential Liquid", quantity: "1/2 cup", notes: "" },
        { name: "Garnish", quantity: "to taste", notes: "freshly chopped" },
      ],
      instructions: [
        "First, prepare all your ingredients as described in the list.",
        "In a large pan over medium heat, combine the main ingredient and the hearty vegetable.",
        "Cook until tender, stirring occasionally, for about 10-12 minutes.",
        "Stir in the aromatic spice and cook for another minute until fragrant.",
        "Add the essential liquid, bring to a simmer, then reduce heat and cover. Cook for 10 more minutes.",
        "To serve, plate your delicious creation and sprinkle with the fresh garnish. Enjoy immediately!",
      ],
    });
  } else {
    throw new Error("The AI chef is busy! Please try a different ingredient.");
  }
};
