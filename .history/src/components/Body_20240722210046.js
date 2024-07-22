import { restaurantlist } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState } from "react";

function filterdata(searchText, Restaurants) {
  const filterdata = Restaurants.filter((restaurants) => {
    restaurants.info.name.includes(searchText);
  });
  return filterdata;
}

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)

  const [Restaurants, setRestaurants] = useState(restaurantlist);
  const [searchText, setsearchText] = useState(""); //To create state variable.......(IN REACT)

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
            const data = filterdata(searchText, Restaurants);
            setRestaurants(data);
            //need to update the state-restaurants
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantlist.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={"restaurant.info.id"} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
