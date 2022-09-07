import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function Results() {
  const { products, setProducts, userSelectedOptions } =
    useContext(Skincontext);

  let navigate = useNavigate();

  //   const handleGetStarted = () => {
  //     navigate("/Dropdowns");
  //   };

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
      <div className="skinTypeWrapper">
        <div>
          {products &&
            products.map((product) => (
              <ul className="descWrapper" key={product.id}>
                <li>{product.productName}</li>
                <li>{product.productDescription}</li>
                <li>{product.productLink}</li>
                <li>{product.skinConcern}</li>
              </ul>
            ))}
        </div>
      </div>
      {/* <button onClick={handleGetStarted}>Get Started</button> */}
    </>
  );
}
