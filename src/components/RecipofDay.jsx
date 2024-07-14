import { useEffect, useState } from "react";

import StarRating from "./StarRating"; // Make sure to adjust the path based on where you save StarRating

export default function RecipofDay() {
  const URL = "https://api.spoonacular.com/recipes/random";
  const API_KEY = "1b26467a53f344a48b8e7e2479072811";

  const [recipe, setRecipe] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchRecipeOfDay() {
      const res = await fetch(`${URL}?number=1&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data.recipes[0]);
      setRating(Math.min(Math.round(data.recipes[0].aggregateLikes / 20), 5)); // Adjust this logic as needed
    }

    fetchRecipeOfDay();

    // Set interval to fetch new recipe every 24 hours
    const intervalId = setInterval(fetchRecipeOfDay, 24 * 60 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mt-32">
        {recipe ? (
          <div className="grid grid-cols-2 gap-20 p-20 z-10">
            <div className="px-10">
              <h1 className="text-brown text-5xl font-semibold font-heading my-3">
                Recipe Of The Day
              </h1>
              <h1 className="text-brown text-2xl font-semibold font-text my-3">
                {recipe.title}
              </h1>
              <StarRating rating={rating} />
              <p>
                Today's featured recipe, {recipe.title}, is a culinary
                masterpiece that promises to delight your taste buds. With a
                perfect balance of flavors and an easy-to-follow preparation,{" "}
                {recipe.title} brings a touch of gourmet elegance to your dining
                table. Dive into this delightful dish and discover why{" "}
                {recipe.title} is a must-try for every food enthusiast.
              </p>
              <div>
                <span>⌚{recipe.readyInMinutes}</span>
                <span> Serving{recipe.servings}</span>
                <span> Healty{recipe.healthScore} %</span>
                <span> {recipe.diets[0]} </span>
              </div>
            </div>

            <img className="" src={recipe.image} alt={recipe.title} />
          </div>
        ) : (
          <p className="text-center text-2xl text-brown">Loading...</p>
        )}
      </div>
    </>
  );
}
