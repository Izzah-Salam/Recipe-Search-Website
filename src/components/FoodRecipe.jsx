import { useEffect } from "react";

export default function FoodRecipe({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1b26467a53f344a48b8e7e2479072811";
  useEffect(() => {
    function FetchFoodDetail() {}
  }, []);
  return (
    <>
      <div className="sm:p-24 py-24 md:px-16 px-10">Food ID : {foodId}</div>
    </>
  );
}
