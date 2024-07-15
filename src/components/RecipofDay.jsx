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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:p-10 md:p-16 p-5 justify-center items-center">
            <div className="px-5">
              <h1 className="text-brown md:text-5xl text-4xl font-semibold font-heading my-3">
                Recipe Of The Day
              </h1>
              <h1 className="text-brown md:text-2xl text-xl font-semibold font-text my-3">
                {recipe.title}
              </h1>
              <StarRating rating={rating} />
              <p className="my-4 font-sm text-gray-500">
                Today's featured recipe, {recipe.title}, is a culinary
                masterpiece that promises to delight your taste buds. With a
                perfect balance of flavors and an easy-to-follow preparation,{" "}
                {recipe.title} brings a touch of gourmet elegance to your dining
                table. Dive into this delightful dish and discover why{" "}
                {recipe.title} is a must-try for every food enthusiast.
              </p>
              <div className="flex mt-3 flex-wrap justify-center md:justify-normal ">
                <span className="mx-2 font-text font-semibold my-2">
                  🕐 Ready in {recipe.readyInMinutes} Min
                </span>
                <span className="mx-2 font-text font-semibold my-2">
                  🍴 {recipe.servings} Serving
                </span>
                <span className="mx-2 font-text font-semibold my-2">
                  Healty {recipe.healthScore} %
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-2xl flex justify-center"
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl text-brown">Loading...</p>
        )}
      </div>
    </>
  );
}
