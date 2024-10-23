import { useSelector } from "react-redux";

const Cart = () => {
  const CartItems = useSelector((store) => store);
  return (
    <div>
      <h1 className="font-bold text-lg">
        Cart Items-{store.cart.items.length}
      </h1>
    </div>
  );
};

export default Cart;
