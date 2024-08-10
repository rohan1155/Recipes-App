import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes?limit=0");
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const recipes = await fetchRecipes();
  // console.log(recipes);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-8 text-gray-800">
        Delicious Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8 cursor-pointer mb-5">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link href={`recipes/${recipe.id}`}>
              <div className="relative w-full h-40">
                <Image
                  src={recipe.image}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt={recipe.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-sm text-gray-500">{recipe.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
