import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import FoodList from "./components/FoodList";
import FoodRecipe from "./components/FoodRecipe";
import Footer from "./components/Footer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      {/* <Searchbar /> */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search foodData={foodData} setFoodData={setFoodData} />
              <FoodList foodData={foodData} setFoodId={setFoodId} />
            </>
          }
        />
        <Route path="/foodDetail" element={<FoodRecipe foodId={foodId} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
