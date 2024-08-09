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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=804071"
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>{Restaurant?.cards[4]?.card?.card?.info?.name}</h2>
      <img
        src={
          Img_cdn_url +
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/1848de26-14f7-444f-9cb8-f59342077782_804071.jpg"
        }
      />
    </div>
  );
};

export default RestaurantMenu;
