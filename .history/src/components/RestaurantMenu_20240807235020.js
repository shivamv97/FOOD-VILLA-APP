import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url, MENU_API_URL } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [Restaurant, setRestaurant] = useState({});

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();

    // Set restaurant data
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestaurant(restaurantData);
  }

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>{"pizza hut"}</h2>
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
