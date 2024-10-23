import { Img_cdn_url } from "../config";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
const FoodItems = () => {
  //props or {restaurant} ->Object Destructuring
  const { restaurantId } = useParams();

  const restaurant = useRestaurant(restaurantId); //custom created hook

  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img className="rounded-md" src={Img_cdn_url + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="font-bold text-xl">{description}</h4>
      <h4 className="font-semibold">{price / 100}</h4>
    </div>
  );
};

export default FoodItems;
