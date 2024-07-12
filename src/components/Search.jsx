import { useEffect, useState, React } from "react";

import { IoIosSearch } from "react-icons/io";
import bg1 from "../assets/img/bg1.png";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "1b26467a53f344a48b8e7e2479072811";

// export default function Search({ foodData, setFoodData }) {
//   const [querry, setQueryy] = useState("pizza");

//   // sytaz of useEffect hooks
//   useEffect(() => {
//     async function fetchFood() {
//       const res = await fetch(`${URL}?query=${querry}&apiKey=${API_KEY}`);
//       const data = await res.json();
//       console.log(data.results);
//       setFoodData(data.results);
//     }
//     fetchFood();
//   }, [querry]);

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    async function fetchFood() {
      if (debouncedQuery) {
        try {
          const res = await fetch(
            `${URL}?query=${debouncedQuery}&apiKey=${API_KEY}`
          );

          const data = await res.json();
          if (res.ok) {
            setFoodData(data.results || []); // Ensure data.results is an array or fallback to an empty array
          } else {
            if (data.code === 402) {
              setError(
                "Your daily points limit has been reached. Please try again tomorrow or upgrade your plan."
              );
            } else {
              setError(data.message);
            }
            setFoodData([]); // Set an empty array on error
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("An error occurred while fetching data.");
          setFoodData([]); // Set an empty array on error
        }
      }
    }
    fetchFood();
  }, [debouncedQuery]);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 justify-center items-center sm:p-24 py-24 md:px-16 px-10 border-black">
        <div className="">
          <div className="font-heading md:text-5xl text-3xl my-5 font-bold text-brown">
            Explore the World of Test And Aromas
          </div>
          <div className="flex items-center relative w-full max-w-md">
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              type="text"
              placeholder="Search Here"
              className="mt-5 bg-pink w-full py-2 px-5 rounded-full"
            />
            <IoIosSearch className="absolute right-5 bottom-2  text-brown text-2xl" />
          </div>
        </div>
        <div className="hidden md:block">
          <img src={bg1} alt="" className=" " />
        </div>
      </div>
    </>
  );
}
