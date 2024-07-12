import { Link } from "react-router-dom";

export default function FoodItems({ food, setFoodId }) {
  return (
    <>
      <div className="border-2 border-brown text-center m-5 text-ellipsis overflow-hidden rounded-lg">
        <img src={food.image} alt="food image" className="bg-cover" />
        <h1 className="font-text my-4 mx-3 ">{food.title}</h1>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className="bg-pink py-2 px-6 mb-4 text-brown rounded-md "
        >
          {/* View Recipe */}
          <Link to={"/foodDetail"}>View Recipe</Link>
        </button>
      </div>
    </>
  );
}
