import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

export default function FoodRecipe({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1b26467a53f344a48b8e7e2479072811";

  const [foodRecipe, setFoodRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setFoodRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodDetail();
  }, [foodId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 sm:p-24 py-24 md:px-16 px-10">
        <div className=" flex flex-col  items-center ">
          <h1 className="text-4xl my-10 font-heading text-brown font-semibold">
            {foodRecipe.title}
          </h1>
          <img
            className="rounded flex justify-center"
            src={foodRecipe.image}
            alt={foodRecipe.title}
          />
          <div className="my-3 flex flex-wrap justify-center items-center text-sm ">
            <span className="bg-pink font-text font-bold px-5 py-2 rounded mx-2 my-2 ">
              🕘 {foodRecipe.readyInMinutes} Minutes
            </span>
            <span className="bg-pink font-text font-bold px-5 py-2 rounded mx-2 my-2 ">
              {foodRecipe.vegetarian ? "🥕 Vegetarian" : "🥩 Not vegetarian"}
            </span>
            <span className="bg-pink font-text font-bold px-5 py-2 rounded mx-2 my-2 ">
              {foodRecipe.servings} Servings
            </span>
            <span className="bg-pink font-text font-bold px-5 py-2 rounded mx-2 my-2 ">
              {foodRecipe.vegan ? "🌱 Vegan" : "Not vegan"}
            </span>
            <span className="bg-pink font-text font-bold px-5 py-2 rounded mx-2 my-2 ">
              💲 {foodRecipe.pricePerServing} Price
            </span>
          </div>
        </div>

        <div className="lg:p-20 p-10 shadow">
          <h1 className="text-2xl font-text font-semibold mb-5">
            Instructions
          </h1>
          {foodRecipe.analyzedInstructions?.[0]?.steps?.length > 0 ? (
            <ul className="font-text list-disc">
              {foodRecipe.analyzedInstructions[0].steps.map((step) => (
                <li className="my-2" key={step.number}>
                  {step.step}
                </li>
              ))}
            </ul>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
      </div>

      <h1 className="text-center text-2xl font-text font-semibold mb-5 ">
        Ingredients
      </h1>
      <Ingredients foodRecipe={foodRecipe} />
    </>
  );
}
