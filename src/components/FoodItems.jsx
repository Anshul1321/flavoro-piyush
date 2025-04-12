import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../components/flavoro-food-items/flavoro-food-app-yt-main/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = () => {
    const category = useSelector((state) => state.category.category);               // Get the selected category from the Redux store
    const search = useSelector((state) => state.search.search);                     // Get the search term from the Redux store
    const handleToast = (name) => toast. success(`Added ${name}`);

    return (
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
            {FoodData.filter((food) => {
                if (category === "All") {
                    return  food.name.toLowerCase().includes(search.toLowerCase());      // Filter the food items even in typing in lowercase
            } else {
                    return (
                         category === food.category &&                                    // Filter the food items based on the selected category
                    food.name.toLowerCase().includes(search.toLowerCase())
                    );
                    }
            }). map((food) => (
                <FoodCard
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                    handleToast={handleToast}
                />
            ))
            }
            
            
            {/* This is the code to display all the food items without filtering them by category
             {/* FoodData.map((food) => {
            return (
                <FoodCard
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                    handleToast={handleToast}
                />
                 );
            
            }) */}
        </div>
        </>
        );
}
export default FoodItems;