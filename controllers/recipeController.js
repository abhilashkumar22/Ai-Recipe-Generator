// Load environment variables from .env file
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateRecipe = async (req, res) => {
  try {
    // 1. Get the recipe name from the request body
    const { recipeName } = req.body;
    if (!recipeName) {
      return res.status(400).json({ message: 'Recipe name is required.' });
    }
    

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // 2. Create the prompt (no changes here)
    const prompt = `
      You are a professional chef. Generate a recipe for the dish named "${recipeName}".
      Your response MUST be a single, valid JSON object and nothing else. Do not include any text before or after the JSON object, like "\`\`\`json".
      The JSON object must follow this exact structure:
      {
        "name": "AI-Generated ${recipeName}",
        "description": "A brief, enticing description of the dish.",
        "prepTime": "X minutes",
        "cookTime": "Y minutes",
        "servings": "Z servings",
        "ingredients": [
          { "name": "Ingredient Name", "quantity": "Amount", "notes": "Optional notes like 'diced' or 'to taste'" }
        ],
        "instructions": [
          "Step 1...",
          "Step 2...",
          "Step 3..."
        ]
      }
    `;

    // 3. Call the Gemini API
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // --- DEBUGGING STEP ---
    // Log the raw text from the AI to see exactly what you received.
    console.log("--- Raw AI Response ---");
    console.log(responseText);
    console.log("-----------------------");
    // --- END DEBUGGING STEP ---
    
    // 4. Parse the AI's response text into a JSON object
    const recipeJson = JSON.parse(responseText.trim());

    // 5. Send the JSON object to the frontend
    res.status(200).json(recipeJson);

  } catch (error) {
    // This will log the specific error to your terminal
    console.error('Error generating recipe:', error);
    res.status(500).json({ message: 'Failed to generate recipe.' });
  }
};

