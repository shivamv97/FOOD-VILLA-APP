import { restaurantlist, restaurant_data } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/shares";
import useOnline from "../utils/useOnline";

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]); //restaurantlist
  const [searchText, setsearchText] = useState(""); //To create state variable.......(IN REACT)
  // console.log("render()");

  useEffect(() => {
    //API call
    GetRestaurants();
  }, []);

  async function GetRestaurants() {
    const data = await fetch(restaurant_data);
    const json = await data.json();
    console.log(json);
    //you have to make change only in line 32,in cards[i],where i is keep changing in the above api link,try from 0-11
    //it's an config-driven UI,Hence,it's Grid Element position keeps on changing.......
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🚫Offline,please check your internet Connection!!</h1>; //early return
  }

  //Don't render component(Early Return)
  // if (!AllRestaurants) return null;
  // if (FilteredRestaurants?.length === 0) return <h1>No Restaurants Found!</h1>;

  //Conditional rendering
  return AllRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-10">
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
            const data = filterdata(searchText, AllRestaurants);
            setFilteredRestaurants(data);
            //need to update the state-restaurants
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {FilteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
