import { Img_cdn_url } from "../config";

const FoodItems = ({ imageId, name, description, price }) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          imageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="font-bold text-xl">{description}</h4>
      <h4 className="font-semibold">{price / 100}</h4>
    </div>
  );
};

export default FoodItems;
