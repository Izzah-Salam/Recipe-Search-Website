export default function FoodItems({ food }) {
  return (
    <>
      <div className="border-2 border-brown text-center m-5 text-ellipsis overflow-hidden rounded-lg">
        <img src={food.image} alt="food image" className="bg-cover" />
        <h1 className="font-text my-4 mx-3 md:w-[300px] sm:w-[250px] w-[200px] ">
          {food.title}
        </h1>
        <button className="bg-pink py-2 px-6 mb-4 text-brown rounded-md ">
          View Recipe
        </button>
      </div>
    </>
  );
}
