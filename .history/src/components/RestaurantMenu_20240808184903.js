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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=655"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return (
    <div>
      <div>
        <h1>Restaurant id: {resId}</h1>
        {/* <h2>{restaurant?.data?.cards[2]?.card.card?.info?.name}</h2> */}

        {/* <img
          src={
            Img_cdn_url +
            restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
        /> */}
        {/* <h3>{restaurant?.data?.cards[2]?.card.card?.info?.city}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.areaName}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.costForTwoMessage}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.avgRating} stars</h3> */}
      </div>
      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card">
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
                <img
                  src={Img_cdn_url + item.card.info.imageId}
                  alt="Menu Info"
                />
              </div>
            </div>
          ))}

          {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
