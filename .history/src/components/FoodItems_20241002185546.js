import { Img_cdn_url } from "../config";
import useRestaurant from "../utils/useRestaurant";

const FoodItems = ({ name, description, imageId, price }) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img src={Img_cdn_url + restaurant[0]?.card?.info?.imageId} />
      <h3 className="text-lg font-bold">{restaurant[0]?.card?.info?.name}</h3>
      <h3>{restaurant[0]?.card?.info?.category}</h3>
      <h3>{restaurant[0]?.card?.info?.description}</h3>
      <h3>{restaurant[0]?.card?.info?.price / 100} Rs.</h3>
    </div>
  );
};

export default FoodItems;
