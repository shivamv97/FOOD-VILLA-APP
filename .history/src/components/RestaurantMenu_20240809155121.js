import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url } from "../config";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=639122&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards
    );
  }
  return (
    <div>
      <div>
        <h1>Restaurant id: {restaurantId}</h1>
        <ul>
          <li>
            <h2>{restaurant[0]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[1]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[2]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[3]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[4]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[5]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[6]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[7]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[8]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[9]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[10]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[11]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[12]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[13]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[14]?.card?.info?.name}</h2>
          </li>
          <li>
            <h2>{restaurant[15]?.card?.info?.name}</h2>
          </li>

          <h2>{restaurant[16]?.card?.info?.name}</h2>
        </ul>
        {/* {
          <img
            src={
              Img_cdn_url +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        } */}
        {/* <h3>{restaurant?.data?.cards[2]?.card.card?.info?.city}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.areaName}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.costForTwoMessage}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.avgRating} stars</h3> */}
      </div>

      {/* <div>
        <h1>MENU</h1>
        <ul>
          {restaurant.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
