import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart())
    } 
    return(
        <div>
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        <button className="bg-green-100 m-2 p-2" onClick={()=>{handelClearCart()}}>Clera Cart</button>
        <div className="flex">
        {
            cartItems.map((item)=> <FoodItem key={item.id} {...item}/>)
        }
        </div>
    
       
        </div>
    )
}

export default Cart;