import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/store/cartSlice"

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(store => store.cart.items)
    const price = useSelector(store => store.cart.price)

    const removeItems = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart(Rs.{price})</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black rounded-lg m-2 p-2 text-white" onClick={removeItems}>Clear cart</button>
                {cartItems.length === 0 && <h1>Your cart is empty. Add some items to the cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart