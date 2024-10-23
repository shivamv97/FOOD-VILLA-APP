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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 shadow-lg bg-pink-50">
      <img src={Img_cdn_url + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="cuisines">{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestrauntCard;
