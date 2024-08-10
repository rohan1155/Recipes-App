import Image from "next/image";
import React from "react";

const fetchRecipe = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function RecipeDetails({ params }) {
  const recipe = await fetchRecipe(params.details);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-1 lg:w-1/3 relative h-96">
          <Image
            src={recipe.image}
            fill={true}
            style={{ objectFit: "cover" }} // Ensure the image covers the container
            alt={recipe.name}
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 lg:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">Servings</h2>
              <p className="text-gray-700">{recipe.servings}</p>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">Cuisine</h2>
              <p className="text-gray-700 capitalize">{recipe.cuisine}</p>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                Calories per Serving
              </h2>
              <p className="text-gray-700">{recipe.caloriesPerServing} kcal</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Instructions
          </h2>
          <p className="text-gray-700 mb-6">{recipe.instructions}</p>
          <div className="flex justify-between text-gray-600 mb-2">
            <span className="font-semibold">Prep Time:</span>
            <span>{recipe.prepTimeMinutes} minutes</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span className="font-semibold">Cook Time:</span>
            <span>{recipe.cookTimeMinutes} minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
