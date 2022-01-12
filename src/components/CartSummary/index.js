// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListQuantity = cartList.length
      const costSummary = cartList.map(
        eachProduct => eachProduct.quantity * eachProduct.price,
      )
      const totalCost = costSummary.reduce(
        (prevValue, presentValue) => presentValue + prevValue,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total:
            <span className="cart-summary-price"> Rs.{totalCost}/-</span>
          </h1>
          <p className="cart-summary-quantity">
            {cartListQuantity} Items in cart
          </p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
