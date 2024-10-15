import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast =(name)=> toast.success(`Added ${name}`)
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=> state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap justify-center sm:mr-4 sm:my-6">

        {
          FoodData.filter((food)=>{
            if(category === 'All'){
              return food.name.toLowerCase().includes(search.toLowerCase())
            }
            else return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }).map((food)=>{
            return <FoodCard key={food.id} foodItems={food} handleToast={handleToast} />;
          })
        }
        
      </div>
    </>
  );
};

export default FoodItems;
