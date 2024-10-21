import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({ bottle, handleAddToCart }) => {
    const {name, price, stock, ratings, img} = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="bottle image" />
            <h4>Price: {price}</h4>
            <p>inStock: {stock}</p>
            <p>Rating: {ratings}</p>
            <button onClick={() => handleAddToCart(bottle)}>purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;