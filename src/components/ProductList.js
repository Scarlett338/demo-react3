//import "../index.css";
import { Link } from "react-router-dom";
import styles from "../ProductList.module.css";
import { useEffect, useState } from "react";
import QuantityBtn from "./QuantityBtn";

export default function ProductList(props) {
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data); // []內一堆obj
      });
  }, []);
  //  console.log(productList); // array 6件obj
  //console.log(productList[0]); // 1件obj name,id,... > product

  return (
    <div>
      {props.children}

      <div className={styles.container}>
        {productList.map((product) => (
          <div className={styles.productBorder} key={product.id}>
            <Link to={"/product/" + product.id}>
              <img
                src={process.env.PUBLIC_URL + /img/ + product.image}
                width={280}
                height={200}
                alt="Product"
              />
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price}/pc</p>
            <QuantityBtn productInfo={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* 
let cartItem = {
  cartItems: [
    {
      id: 1,
      name: "Apple",
      price: 5,
      image:
        "https://pikwizard.com/pw/medium/b3cfde2215ead2d654af78e6eb6d05f6.avif",
      description: "Healthy",
    },
    {
      id: 2,
      name: "Grapes",
      price: 10,
      image:
        "https://pikwizard.com/pw/medium/f0ded826f59fcf1249b8892e7b6dfd00.avif",
      description: "Healthy",
    },
    {
      id: 3,
      name: "Mango",
      price: 15,
      image: "https://free-images.com/lg/0e28/mango_fruit_sliced_exotic_1.jpg",
      description: "Healthy",
    },
  ],
  userInfo: {
    name: "Mary",
    email: "123@gmail.com",
  },
};

https://pikwizard.com/pw/medium/364368778fa1d5d6285ab38f7c3cd6f0.avif
https://pikwizard.com/photo/orange-citrus-fruit/40f687f44f6816f811ea3021137085c5/
https://pikwizard.com/pw/medium/1e4f021f9eeaa48d1209a7c41aa05584.avif
https://pikwizard.com/pw/medium/7d042a68069340a09d9747337df02f75.avif

 */
