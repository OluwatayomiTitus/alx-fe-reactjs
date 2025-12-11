import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    // Ensure at least 2 ingredients
    const ingredientList = ingredients.split("\n").filter((i) => i.trim() !== "");
    if (ingredientList.length < 2)
      newErrors.ingredients = "Enter at least two ingredients (one per line).";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    
    alert("Recipe submitted successfully!");

    // Reset fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Ingredients</label>
          <textarea
            className="w-full p-2 border rounded h-32 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Add your ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Preparation Steps</label>
          <textarea
            className="w-full p-2 border rounded h-40 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write your steps sequentially"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
