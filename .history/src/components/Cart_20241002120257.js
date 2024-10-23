import { useSelector } from "react-redux";
import HeaderComponent from "./Title";
const Cart = () => {
  const CartItems = useSelector(() => GetCartItems());
  return (
    <div>
      <h1 className="font-bold text-lg">Cart Items</h1>
    </div>
  );
};

export default Cart;
