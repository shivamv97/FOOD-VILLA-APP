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
    <div className="w-[200px] flex">
      <img src={Img_cdn_url + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestrauntCard;
