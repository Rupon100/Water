import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="CartImg">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>dlt</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;