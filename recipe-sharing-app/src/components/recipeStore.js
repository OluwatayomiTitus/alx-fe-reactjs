import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Add a single recipe
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Initialize the recipe list
  setRecipes: (recipes) => set({ recipes }),
}));
