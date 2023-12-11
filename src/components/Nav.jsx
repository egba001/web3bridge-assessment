import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import Cart from "./Cart";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const Nav = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const { itemAmount } = useContext(CartContext);

    return (
        <>
            {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <header className="w-full py-5 text-white bg-slate-700 flex items-center justify-between px-7">
                <h1 className="font-semibold text-[25px]">B - Store</h1>
                <div onClick={() => setIsOpen(true)} className="relative cursor-pointer flex items-center justify-center p-3">
                    <FiShoppingCart />
                    <div className="rounded-full bg-red-500 h-4 w-4 flex justify-center items-center absolute top-0 right-0">
                        {itemAmount}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav;
