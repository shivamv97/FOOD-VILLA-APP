//(?)->optional chaining
import { Img_cdn_url } from "../config";
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="card">
      <img src={Img_cdn_url + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrauntCard;
