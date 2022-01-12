// Write your code here
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
        <div>
          <h1>Order Total :Rs.{totalCost}</h1>
          <p>{cartListQuantity} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
