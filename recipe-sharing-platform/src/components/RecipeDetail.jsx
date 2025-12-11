import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === Number(id));
        setRecipe(selected);
      });
  }, [id]);

  if (!recipe) return <p className="text-center p-8">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:underline text-sm"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {(recipe.ingredients || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          {(recipe.instructions || []).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
