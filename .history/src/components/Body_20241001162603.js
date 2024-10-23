import { restaurantlist, restaurant_data } from "../config";
import RestrauntCard from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/shares";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

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

  const { user, SetUser } = useContext(UserContext);

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
      <div className="p-5 my-5 bg-[url('https://img.freepik.com/free-vector/fresh-sandwich-chalkboard-background-advertisement-poster_1284-19550.jpg?size=626&ext=jpg')] bg-cover bg-center h-64 w-full">
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
          className="p-2 m-2 bg-purple-600 text-white rounded-md hover:bg-green-400"
          onClick={() => {
            //filter the data according to need
            const data = filterdata(searchText, AllRestaurants);
            setFilteredRestaurants(data);
            //need to update the state-restauradnts
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => {
            SetUser({
              ...user,
              name: e.target.value,
            });
          }}
        ></input>
        <input
          value={user.email}
          onChange={(e) => {
            SetUser({
              ...user,
              email: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="flex flex-wrap">
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
