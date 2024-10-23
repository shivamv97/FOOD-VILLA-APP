import { Img_cdn_url } from "../config";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
const FoodItems = () => {
  //props or {restaurant} ->Object Destructuring
  const { restaurantId } = useParams();

  const restaurant = useRestaurant(restaurantId); //custom created hook

  return (
    <div>
      {Array.isArray(restaurant) &&
        restaurant.map((item) => (
          <ul>
            <li key={item?.card?.info?.id}>
              <div>
                <img src={Img_cdn_url + restaurant[0]?.card?.info?.imageId} />
                <h3 className="text-lg font-bold">
                  {restaurant[0]?.card?.info?.name}
                </h3>
                <h3>{restaurant[0]?.card?.info?.category}</h3>
                <h3>{restaurant[0]?.card?.info?.description}</h3>
                <h3>{restaurant[0]?.card?.info?.price / 100} Rs.</h3>
              </div>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default FoodItems;
