import { useSelector } from "react-redux";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);

  //   const store = useSelector((store) => store);  Wrong X X X
  return (
    <div>
      <h1 className="font-bold text-lg">Cart Items-{CartItems.length}</h1>
    </div>
  );
};

export default Cart;
