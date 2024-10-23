import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { additem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurant = useRestaurant(restaurantId); //custom created hook

  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(additem("Grapes")); //this will call the additem function in reducers of cartSlice.js..
  }; //BTS:- {payload : "Grapes"}

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {restaurantId}</h1>
        {/* <h1>{resname.text}</h1>; */}
        <img src={Img_cdn_url + restaurant[0]?.card?.info?.imageId} />
        <h3>{restaurant[0]?.card?.info?.category}</h3>
        <h3>{restaurant[0]?.card?.info?.description}</h3>
        <h3>{restaurant[0]?.card?.info?.price} Rs.</h3>
        <h3>isVeg: {restaurant[0]?.card?.info?.isVeg} </h3>
      </div>
      <div>
        <button
          onClick={() => handleAddItems()}
          className="p-2 m-5 bg-green-200"
        >
          Add Item
        </button>
      </div>

      <div>
        <h1>MENU</h1>
        <ul>
          {Array.isArray(restaurant) &&
            restaurant.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}-<button className="">ADD</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
