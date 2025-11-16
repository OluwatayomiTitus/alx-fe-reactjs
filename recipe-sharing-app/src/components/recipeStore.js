import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const remainingRecipes = state.recipes.filter((r) => r.id !== id);
      return { recipes: remainingRecipes, filteredRecipes: remainingRecipes };
    }),

  // Search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  // Filter recipes based on search term
  filterRecipes: (term) => {
    const search = term?.toLowerCase() || get().searchTerm.toLowerCase();
    const filtered = get().recipes.filter((r) =>
      r.title.toLowerCase().includes(search)
    );
    set({ filteredRecipes: filtered });
  },
}));
