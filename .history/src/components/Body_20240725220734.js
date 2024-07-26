import { restaurantlist } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState, useEffect } from "react";

function filterdata(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
}

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)

  const [restaurants, setRestaurants] = useState(restaurantlist);
  const [searchText, setsearchText] = useState(""); //To create state variable.......(IN REACT)
  // console.log("render()");

  useEffect(() => {
    console.log("call when dependency is changed");
  }, [searchText]);

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
            const data = filterdata(searchText, restaurants);
            setRestaurants(data);
            //need to update the state-restaurants
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
