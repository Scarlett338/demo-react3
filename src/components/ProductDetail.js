import React from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductDetail(props) {
  let params = useParams();
  let [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
      .then((res) => res.json())
      .then((data) => {
        //setProductDetail(data);
        let productInfo = data.find((e) => {
          return e.id === parseInt(params.id);
        });
        setProductDetail(productInfo);
      });
  }, []);

  return (
    <div>
      {productDetail && (
        <div>
          <Title title={productDetail.name + " Product Information"} />
          <div className="detailCon">
            <div className="detailCol">
              <img
                src={process.env.PUBLIC_URL + /img/ + productDetail.image}
                width={280}
                height={200}
                alt="Product"
              />
            </div>

            <div className="detailCol">
              <p>${productDetail.price}/pc</p>
              <p>{productDetail.description}</p>
              <QuantityBtn productInfo={productDetail} />{" "}
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="detaillink">
        <h2>Back to Product List</h2>
      </Link>
    </div>
  );
}
