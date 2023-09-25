import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import { CartContext } from "./CartContext";

export default function Checkout(props) {
  let { cartItems } = useContext(CartContext);
  let cartEmpty = cartItems.length <= 0 ? true : false;
  let totalPrice = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);

  let freeShippingPrice = 99;

  return (
    <div className="checkoutWhole">
      {props.children}

      {cartEmpty && (
        <div>
          <h3>Shopping cart is empty.</h3>
          <Link to="/">Product List</Link>
        </div>
      )}

      {!cartEmpty && (
        <div className="checkoutcontainer">
          {/* 產品 */}
          <div className="left">
            {cartItems.map((product) => (
              <div className="eachProduct" key={product.id}>
                <div className="checkoutCon">
                  <div className="checkoutRow">
                    {/* 圖片 */}
                    <img
                      src={process.env.PUBLIC_URL + /img/ + product.image}
                      width={280}
                      height={200}
                      alt="Product"
                    />
                  </div>
                  <div className="checkoutRow">
                    {/* 描述 */}
                    <h3>{product.name}</h3>
                    <p>${product.price}/pc</p>
                    <QuantityBtn productInfo={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 價錢總數 */}
          <div className="right">
            <h2> Total price: ${totalPrice}</h2>
            <div>
              {totalPrice > freeShippingPrice ? (
                <h3>Free Delivery!</h3>
              ) : (
                <div>
                  <p> Free Shipping for purchase over ${freeShippingPrice}!</p>
                  <p> Buy ${freeShippingPrice - totalPrice} more</p>
                </div>
              )}
            </div>
            <button>Pay</button>
          </div>
        </div>
      )}
    </div>
  );
}

// let cartItem = {
//   cartItems: [
//     {
//       id: 5,
//       name: "Blueberry",
//       price: 10,
//       quantity: 5,
//     },
//     {
//       id: 4,
//       name: "Watermelon",
//       price: 20,
//       quantity: 1,
//     },
//   ],
// };

// let { cartItems } = cartItem; // destructuring , 不必

//  let { cartItems } = useContext(CartContext); // {} destructuring
