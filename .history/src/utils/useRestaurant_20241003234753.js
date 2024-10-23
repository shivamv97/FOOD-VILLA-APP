import { useState, useEffect } from "react";
import { restaurantMenu_data_url } from "../config";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState({});
  const [resname, setResname] = useState({}); //This is only used for Getting the restaurant name....

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(restaurantMenu_data_url + restaurantId);
    const json = await data.json();
    setRestaurant(json?.data);
    setResname(json?.data?.cards[0]?.card?.card);
  }
  return restaurant;
};

export default useRestaurant;
