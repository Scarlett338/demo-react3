import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import Title from "./components/Title";
import { useState } from "react";
import Nav from "./components/Nav";
import { CartContext } from "./components/CartContext";

function App() {
  let [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                children={<Title title="Please choose the product you want." />}
              />
            }
          />
          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <Checkout children={<Title title="Your Shopping Cart" />} />
            }
          />
          <Route path="*" element={<p>404 Not Found</p>}></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;

/* import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Promo from "./components/Promo";
import Intro3 from "./components/Intro3";

function App() {
  return (
    <div className="App">


    <Heading children={<Promo discount="50%" />} />
      <Nav nav1="Home test" children={<Promo discount="50%" />} />
      <Intro3 />
      <div className="Card">
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" /> 
      </div>
    </div>
  );
}

export default App; */
