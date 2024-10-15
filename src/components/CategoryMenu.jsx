import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCatories = () => {
    const uniqueCatories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCatories);
    console.log(categories);
  };
  useEffect(() => {
    listUniqueCatories();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state)=>state.category.category)

  return (
    <div className="my-3">
      <h2 className="font-semibold ml-3 text-xl">Find the best food</h2>
      <div className="m-2 flex gap-3 max-sm:overflow-x-scroll font-bold">
        <button
          onClick={() => {
            dispatch(setCategory("All"));
          }}
          className={`p-2 bg-gray-400 rounded-lg text-black hover:bg-green-400 text-white ${selectedCategory == "All" && "bg-green-500 text-white"}`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => {
                dispatch(setCategory(category));
              }}
              key={index}
              className={`p-2 bg-gray-400 rounded-lg text-black hover:bg-green-400 text-white ${selectedCategory==category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
