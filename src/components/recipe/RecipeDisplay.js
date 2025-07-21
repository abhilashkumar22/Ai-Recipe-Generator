import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const RecipeDisplay = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <Card>
      <div className="p-6 md:p-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {recipe.name}
        </motion.h2>
        <motion.div 
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>{recipe.description}</p>
        </motion.div>

        <div className="flex flex-wrap gap-4 text-center mb-8">
          {['prepTime', 'cookTime', 'servings'].map((key, i) => (
            <motion.div 
              key={key} 
              className="bg-indigo-50 p-3 rounded-lg flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="text-sm text-indigo-800 font-bold uppercase">{key.replace('Time', ' Time')}</div>
              <div className="text-lg font-semibold text-indigo-900">{recipe[key]}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <IngredientsList ingredients={recipe.ingredients} />
          <Instructions instructions={recipe.instructions} />
        </div>
      </div>
    </Card>
  );
};

export default RecipeDisplay;