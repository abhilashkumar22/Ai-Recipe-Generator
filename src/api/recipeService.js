// src/api/recipeService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/generate-recipe'; // Your backend URL

/**
 * In a real application, you would uncomment the axios part and use this function.
 * This function sends a request to your Node.js backend.
 */
// export const fetchRecipe = async (query) => {
//   try {
//     const response = await axios.post(API_URL, { query });
//     return response.data; // The backend should return the JSON recipe
//   } catch (error) {
//     console.error("Error fetching recipe:", error);
//     // Rethrow a more user-friendly error message
//     throw new Error(error.response?.data?.message || 'Failed to connect to the AI chef.');
//   }
// };


/**
 * MOCK FUNCTION: Simulates an API call to the backend.
 * Replace this with the real `fetchRecipe` function above once your backend is ready.
 */
export const fetchRecipe = async (query) => {
  console.log(`Simulating API call for: "${query}"`);
  await new Promise(resolve => setTimeout(resolve, 2000));

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
