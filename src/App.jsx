import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import SearchBar from "./components/recipe/SearchBar";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorMessage from "./components/ui/ErrorMessage";
import RecipeDisplay from "./components/recipe/RecipeDisplay";
import useRecipeGenerator from "./hooks/useRecipeGenerator";

export default function HomePage() {
  const { recipe, isLoading, error, generateRecipe } = useRecipeGenerator();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="flex-grow w-full">
        <Container>
          <div className="text-center py-12 md:py-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI Recipe Generator
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tell me what you're craving, and I'll create a unique recipe for you!
            </motion.p>
            <SearchBar onSearch={generateRecipe} isLoading={isLoading} />
          </div>

          <div className="mt-4 mb-16">
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div key="loader" exit={{ opacity: 0 }}>
                  <LoadingSpinner />
                </motion.div>
              )}
              {error && (
                <motion.div key="error" exit={{ opacity: 0 }}>
                  <ErrorMessage message={error} />
                </motion.div>
              )}
              {recipe && !isLoading && (
                <motion.div
                  key="recipe"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <RecipeDisplay recipe={recipe} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
