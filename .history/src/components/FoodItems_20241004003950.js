import { Img_cdn_url } from "../config";

const FoodItems = ({ imageId, name, category, price }) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-3 bg-pink-50  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img className="rounded-md" src={Img_cdn_url + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="font-semibold">{category}</h4>
      <h4 className="font-semibold">₹{price / 100}</h4>
      {/* <h4 className="bg-green-500 text-white font-bold py-2 px-4 inline-block rounded">
        ★{rating.aggregatedRating.rating}
      </h4> */}
    </div>
  );
};

export default FoodItems;
