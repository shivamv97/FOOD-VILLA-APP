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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>{Restaurant.name}</h2>
      <img src={Img_cdn_url + Restaurant.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantMenu;
