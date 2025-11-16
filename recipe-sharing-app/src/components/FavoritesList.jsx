import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
