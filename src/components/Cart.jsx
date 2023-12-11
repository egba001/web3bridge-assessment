import { MdOutlineCancel } from "react-icons/md";
import { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import Item from "./Item";

const Cart = ({ isOpen, setIsOpen }) => {

    const { cart, clearCart, total, itemAmount } = useContext(CartContext);

    return (
        <aside className="h-screen block z-20 w-[30vw] absolute right-0 top-0">
            <div className="bg-white w-full h-full">
                <div className="w-fit mt-5 ml-5 cursor-pointer" onClick={() => setIsOpen(false)}>
                    <MdOutlineCancel />
                </div>
                <div className="w-full flex flex-col px-4 gap-3">
                    {cart && cart.map((item, id) => {
                        <Item key={id} item={item} />
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Cart;
