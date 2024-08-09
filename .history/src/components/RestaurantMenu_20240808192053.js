import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url } from "../config";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=655"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return (
    <div>
      <div>
        <h1>Restaurant id: {resId}</h1>
        {<h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>}

        {
          <img
            src={
              Img_cdn_url +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        }
        {/* <h3>{restaurant?.data?.cards[2]?.card.card?.info?.city}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.areaName}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.costForTwoMessage}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.avgRating} stars</h3> */}
      </div>
      {/* <div>
        <h1>MENU</h1>
        <ul>
          {restaurant &&
            (restaurant.cards[5]?.card?.card?.itemCards[0]?.card?.info?.addons[0]?.choices).map(
              (item) => <li key={item.id}>{item.name}</li>
            )}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
