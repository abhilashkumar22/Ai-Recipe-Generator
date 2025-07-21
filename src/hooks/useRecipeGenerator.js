import { useState } from 'react';
import axios from 'axios';

const fetchRecipe = async (query) => {
  const API_URL = 'http://localhost:5000/api/recipes/generate_recipe';
  console.log(`Sending request to backend: ${API_URL} with query: "${query}"`);
  try {
    const response = await axios.post(API_URL, { recipeName: query });
    return response.data;

  } catch (error) {
    console.error("Error fetching recipe from backend:", error);
    const errorMessage = error.response?.data?.message || 'Failed to connect to the AI chef. Please check if the backend server is running.';
    throw new Error(errorMessage);
  }
};

const useRecipeGenerator = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const generateRecipe = async (query) => {
    setRecipe(null);
    setError(null);
    setIsLoading(true);
    try {
      const newRecipe = await fetchRecipe(query);
      setRecipe(newRecipe);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setRecipe(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { recipe, isLoading, error, generateRecipe };
};

export default useRecipeGenerator;