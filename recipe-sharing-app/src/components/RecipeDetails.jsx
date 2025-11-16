import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const [editing, setEditing] = useState(false);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found.</p>;
    const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    
    <button
        onClick={() => {
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
        }}
        style={{ marginBottom: '10px' }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>


      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <div>
          <button onClick={() => setEditing(true)} style={{ marginRight: '10px' }}>
            Edit
          </button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      )}
    </div>
  );
};

  
export default RecipeDetails;
