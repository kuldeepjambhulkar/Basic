import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

export default Cart = (props) => {
    let cartData = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return <div className="container mx-auto mt-10">
        { 
            cartData.length &&
            <button 
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
               onClick={() => handleClearCart()}
           >Clear Cart</button>

        }
        {
            cartData.map((item, index) => {
                return <div key={index} className="flex border-b-2 p-2 justify-between">
                <div className="m-2">
                    <p>{item.name}</p>
                    <p>₹ {item.price/100}</p>
                    <p>{item.description}</p>
                    <p>In Stock : {item.inStock ? "✅" : "❎"}</p>
                </div>
                <div className="flex flex-col">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.imgId} alt="" />
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemoveItem(item)}
                    >
                        Remove
                    </button>
                </div>
            </div>
            })
        }
    </div>
}