import { createContext, useState, useEffect } from "react";

export const Skincontext = createContext({});

export function SkincontextProvider({ children }) {
  const { Provider } = Skincontext;
  const [skinTypes, setSkinTypes] = useState();
  const [userSelectedOptions, setUserSelectedOptions] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://analyze-skin-api.web.app/skintypes")
      .then((res) => res.json())
      .then((data) => {
        data = data.sort((a, b) => a.index - b.index);
        setSkinTypes(data);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   fetch("https://analyze-skin-api.web.app/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch(console.error);
  // }, []);
  const value = {
    skinTypes,
    setSkinTypes,
    userSelectedOptions,
    setUserSelectedOptions,
    products,
    setProducts,
  };

  return <Provider value={value}>{children}</Provider>;
}
