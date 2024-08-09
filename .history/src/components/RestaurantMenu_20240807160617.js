import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [Restaurant, setRestaurant] = useState({});

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>{Restaurant?.name}</h2>
      <img src={Img_cdn_url + Restaurant.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantMenu;
