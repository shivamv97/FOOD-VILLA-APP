import { restaurantlist } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState, useEffect } from "react";
import shimmer from "./shimmer";

function filterdata(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
}

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)

  const [restaurants, setRestaurants] = useState([]); //restaurantlist
  const [searchText, setsearchText] = useState(""); //To create state variable.......(IN REACT)
  // console.log("render()");

  useEffect(() => {
    //API call
    GetRestaurants();
  }, []);

  async function GetRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    console.log(json);
    //you have to make change only in line 32,in cards[i],where i is keep changing in the above api link,try from 0-11
    //it's an config-driven UI,Hence,it's Grid Element position keeps on changing.......
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");

  //Conditional rendering
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
          return (
            <RestrauntCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
