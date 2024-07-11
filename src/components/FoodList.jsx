import FoodItems from "./FoodItems";

export default function FoodList({ foodData }) {
  return (
    <div className="container ">
      <div className="flex flex-wrap justify-center mx-5">
        {foodData.map((food) => (
          <div key={food.id} className="">
            <FoodItems food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}
