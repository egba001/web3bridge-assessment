import PropTypes from "prop-types"
const ProductCard = ({ title, price, image }) => {
    return (
        <div>
            <img src={image} alt={title} />
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