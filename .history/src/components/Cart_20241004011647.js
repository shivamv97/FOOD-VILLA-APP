import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  //   const store = useSelector((store) => store);  Wrong X X X
  return (
    <div>
      <h1 className="font-bold text-lg">Cart Items-{CartItems.length}</h1>
      <button
        className="bg-green-100 border border-black border-solid p-4"
        onClick={() => HandleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {CartItems.map((item, index) => (
          <FoodItems key={index} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
