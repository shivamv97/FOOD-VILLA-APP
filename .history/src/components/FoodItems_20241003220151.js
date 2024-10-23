import { Img_cdn_url } from "../config";

const FoodItems = ({ imageId, name, description, price }) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img className="rounded-md" src={Img_cdn_url + imageId} />
      {(strName = name.toString())}
      <h2 className="font-bold text-xl">{strName}</h2>
      {/* <h3 className="text-gray-500">{cuisines.join(", ")}</h3> */}
      <h4 className="font-bold text-xl">{description}</h4>
      <h4 className="font-semibold">{price / 100}</h4>
    </div>
  );
};

export default FoodItems;
