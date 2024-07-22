import { restaurantlist } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState } from "react";

const Body = () => {
  // const searchTxt = "KFC"; //for reference...(IN JS)

  //Searchtxt is local state variable
  const [searchText, setsearchText] = useState("false"); //To create state variable.......(IN REACT)
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
        <h1>{searchText}</h1>
        <button className="search-btn" onClick={}>Search</button>
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
