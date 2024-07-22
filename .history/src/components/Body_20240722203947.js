import { restaurantlist } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState } from "react";

function filterdata(searchText, Restaurants) {}

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)

  //Searchtxt is local state variable
  const [searchText, setsearchText] = useState("KFC"); //To create state variable.......(IN REACT)
  const [Restaurants, setRestaurants] = useState(restaurantlist);
  //Parent Component
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data according to need
            const data = filterdata(searchText, Restaurants); //storing the data
            setRestaurants(data); //updating the data
            //need to update the state-restaurants
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {Restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={"restaurant.info.id"} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
