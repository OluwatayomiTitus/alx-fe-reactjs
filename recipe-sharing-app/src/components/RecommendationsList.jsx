import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 && <p>No recommendations available.</p>}
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
