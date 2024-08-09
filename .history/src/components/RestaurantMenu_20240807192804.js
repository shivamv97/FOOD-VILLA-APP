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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=804071&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
    ("");
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
