import PropTypes from "prop-types"
import { CartContext } from "../context/CartContext";
import { useContext } from 'react'

const ProductCard = ({ title, price, image }) => {

    // const { addToCart } = useContext(CartContext);

    return (
        <div className="p-2 rounded-md border">
            <img src={image} alt={title} width="110" />
            <div className="text-black">
                <h2>{title}</h2>
                <p>{price}</p>
                <button className="py-2 px-4 rounded-md bg-gray-400 text-black">Add to cart</button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string
}

export default ProductCard;