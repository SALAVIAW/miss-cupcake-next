import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/home.module.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      { cart.length === 0 ? (
        <div className="cart-empty">
          <h3>Your cart is empty</h3>
          <div className="start-shopping">
            <Link href="/">
              <figure className={styles.back}>
                <Image
                  src="/images/arrow-left.svg"
                  alt="arrow left"
                  width="35"
                  height="35"
                  
                />
              </figure>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total Amount</h3>
          </div>
          <div>
            {cart?.map((cartItem) => {
              return (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <Image src={cartItem.image} alt={cartItem.name} width='32px' height='32px' />
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;
