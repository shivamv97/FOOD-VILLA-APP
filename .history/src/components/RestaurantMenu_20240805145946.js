import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  return (
    <div>
      <h1>Restaurant id : 123</h1>
      <h2>Burger King</h2>
    </div>
  );
};

export default RestaurantMenu;
