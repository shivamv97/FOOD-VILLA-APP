//(?)->optional chaining
import { createContext, useContext } from "react";
import { Img_cdn_url } from "../config";
import UserContext from "../utils/UserContext";
const { user } = useContext(UserContext);
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
}) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img className="rounded-md" src={Img_cdn_url + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-gray-500">{cuisines.join(", ")}</h3>
      <h4 className="bg-green-500 text-white font-bold py-2 px-4 inline-block rounded">
        ★{avgRating}
      </h4>
      <h4 className="font-semibold">{costForTwo}</h4>
      <h4 className="font-serif">⏰{sla.deliveryTime} minutes </h4>
      <h5 className="text-red-600">{user.name}</h5>
    </div>
  );
};

export default RestrauntCard;
