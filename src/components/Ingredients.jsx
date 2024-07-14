export default function Ingredients({ foodRecipe }) {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {foodRecipe.extendedIngredients.map((item) => (
          <div className="m-4 shadow p-3 flex flex-col items-center justify-center">
            <img
              className="bg-gray-100 rounded-sm p-5"
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3 className="my-2 capitalize font-semibold font-text">
              {item.name}
            </h3>
            <h3 className="my-2 capitalize font-semibold font-text">
              {item.amount} {item.unit}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
