//(?)->optional chaining
import { Img_cdn_url } from "../config";
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
    <div className="w-52 m-2 p-2 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img src={Img_cdn_url + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="break-words text-gray-400">{cuisines.join(",")}</h3>
      <h4 className="bg-green-500 text-white font-bold py-2 px-4 inline-block rounded">
        ★{avgRating}
      </h4>
      <h4 className="font-semibold">{costForTwo}</h4>
      <h4 className="font-serif">⏰{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestrauntCard;
