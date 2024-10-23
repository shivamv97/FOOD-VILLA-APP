import { useSelector } from "react-redux";
import HeaderComponent from "./Title";
import store from "../utils/store";
const Cart = () => {
  const CartItems = useSelector((store) => store);
  return (
    <div>
      <h1 className="font-bold text-lg">Cart Items</h1>
    </div>
  );
};

export default Cart;
