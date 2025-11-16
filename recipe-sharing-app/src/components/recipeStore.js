import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      recommendations: state.recommendations,
    })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Add to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations (mock example)
  generateRecommendations: () => {
    const state = get();
    // Recommend recipes that are not already favorites
    const recommended = state.recipes.filter(
      (r) => !state.favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
