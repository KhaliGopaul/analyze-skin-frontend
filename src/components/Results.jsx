import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function Results() {
  const { products, setProducts, userSelectedOptions } =
    useContext(Skincontext);

  let navigate = useNavigate();

  const handleReviews = () => {
    navigate("/ReviewForm")
  } 

  useEffect(() => {
    fetch("https://analyze-skin-api.web.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log({ userSelectedOptions });
        const productSet = data.filter(
          (prod) => prod.skinConcern === userSelectedOptions.concern
        );
        console.log({ productSet });
        setProducts(productSet);
      })
      .catch((err) => console.error(err));
  }, [userSelectedOptions]);

  return (
    <>
      <div className="">
        <div>
          {products &&
            products.map((product) => (
              <div className="productWrapper" key={product.id}>
                <img src={product.imagePath} />
                <h3>{product.productName}</h3>
                <p>{product.productDescription}</p>
                <a href={product.productLink} >Buy Here</a>
              </div>
            ))}
        </div>
<button onClick={handleReviews}>Submit Review</button>
      </div>
      {/* <button onClick={handleGetStarted}>Get Started</button> */}
    </>
  );
}
