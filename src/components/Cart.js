import { useDispatch, useSelector } from "react-redux"
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";


export default function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearClick = () => {
    dispatch(clearCart());
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className='rounded-l m-2 p-2 bg-black text-white' onClick={handleClearClick}
      >Clear cart</button>
      {cartItems.length === 0 && <h1>Oops! Cart is empty!</h1>}
      <div>
        <ItemsList items={cartItems} />
      </div>
      <div>

        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg mt-2">Back</button>

      </div>
    </div>
  )
}