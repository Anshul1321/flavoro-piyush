import React, { useEffect, useState } from "react";
import FoodData from "../components/flavoro-food-items/flavoro-food-app-yt-main/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/slices/CategorySlice.jsx";

const CategoryMenu = () => {
      const [categories, setCategories] = useState([]);

      const listUniqueCategories = () => {
        const uniqueCategories = [
            ...new Set(FoodData.map((food) => food.category))
        ];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
      };

      useEffect(() => {
        listUniqueCategories();
      }
      , []);

        const dispatch = useDispatch();
        const SelectedCategory = useSelector((state) => state.category.category);

    return (
        <div className="ml-6">
            <h3 className="text-xl font-semibold">Find the best food</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
                 <button onClick={() => dispatch(setCategory("All"))}                            // Use javascript logic in both buttons (All, catgory) for green & white color
                    className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                        SelectedCategory === "All" && "bg-green-500 text-white" }`}
                        >All</button>
                       
              
               {categories.map((category, index) => {
                return (                                                                                                                      // here is a dynamic button below
                    <button onClick={() => dispatch(setCategory(category))}
                    key={index} 
                    className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                        SelectedCategory === category && "bg-green-500 text-white" }`}
                        >{category}</button>
                        
                );
            })} 
                
                {/* <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">All</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Lunch</button>        // These are static buttons for the categories
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Breakfast</button>
                <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Dinner</button> */}

            </div>
        </div>
        );
}
export default CategoryMenu;