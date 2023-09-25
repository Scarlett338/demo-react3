import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn({ productInfo }) {
  // set一致
  let { cartItems, setCartItems } = useContext(CartContext);

  //讀取cart有什麼
  let productIndexInCart = cartItems.findIndex((e) => {
    return e.id === productInfo.id;
  });

  let [numInCart, setNumInCart] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );

  //handle click
  const handleAdd = () => {
    if (productIndexInCart === -1) {
      setCartItems([
        {
          id: productInfo.id,
          name: productInfo.name,
          price: productInfo.price,
          image: productInfo.image,
          description: productInfo.description,
          quantity: 1,
        },
        ...cartItems,
      ]);
    } else {
      let newCartArr = [...cartItems];
      newCartArr[productIndexInCart].quantity++;
      setCartItems(newCartArr);
    }
    setNumInCart(numInCart + 1);
  };

  const handleSubtract = () => {
    if (productIndexInCart.quantity === 1) {
      let newCartArr = [...cartItems];
      newCartArr.splice(productIndexInCart, 1);
      setCartItems(newCartArr);

      /* setCartItems(
        cartItems.splice(productIndexInCart,1) 點解唔可以用?
      ) */
    } else {
      let newCartArr = [...cartItems];
      newCartArr[productIndexInCart].quantity--;
      setCartItems(newCartArr);
    }
    setNumInCart(numInCart - 1);
  };

  //  console.log(productInfo); // 有{}, {name, id}
  //  console.log(productInfo.productInfo); // 冇{}, {productInfo: {name, id}}

  return (
    <div className="clickevent">
      {numInCart === 0 && (
        <div className="add" onClick={handleAdd}>
          Add to Cart
        </div>
      )}
      {numInCart !== 0 && (
        <div>
          <button onClick={handleSubtract}>-</button>
          <span> {numInCart} pc </span>
          <button onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
  );
}
