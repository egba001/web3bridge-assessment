import PropTypes from "prop-types"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

const Item = ({ item }) => {

    const { removeFromCart, increaseAmount, decreaseAmount } =
        useContext(CartContext);

    const { productImage, id, productName, amount, productPrice } = item;

    return (
        <div className="flex gap-x-4 border-b lg:px-6 w-full font-light text-gray-400 border-gray-200">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <img src={productImage} alt="product" className="max-w-[80px]" />
                <div className="flex justify-between w-full flex-col">
                    <div className="flex justify-between mb-2">
                        {productName}
                        <button
                            className="text-xl cursor-pointer"
                            onClick={() => removeFromCart(id)}
                        >
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="flex h-[36px] gap-x-2 rounded-sm items-center">
                        <div className="flex flex-1 h-full max-w-[100px] rounded-sm border-primary font-medium text-sm  items-center justify-between">
                            <div
                                onClick={() => decreaseAmount(id)}
                                className="bg-red flex-1 h-full flex justify-center items-center"
                            >
                                <IoMdRemove />
                            </div>
                            <p className="h-full justify-center items-center px-2 flex">
                                {amount}
                            </p>
                            <div
                                onClick={() => increaseAmount(id)}
                                className="flex-1 h-full flex justify-center items-center"
                            >
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-1">
                            $ {productPrice}
                        </div>
                        <div className="flex-1 flex items-center font-medium justify-end text-primary">{`$ ${parseFloat(
                            productPrice * amount
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Item.propTypes = {
  item: PropTypes.shape({
    amount: PropTypes.any,
    id: PropTypes.any,
    productImage: PropTypes.any,
    productName: PropTypes.any,
    productPrice: PropTypes.any
  })
}

export default Item;