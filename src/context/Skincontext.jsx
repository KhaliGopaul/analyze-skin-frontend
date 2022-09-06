import { createContext, useState, useEffect } from "react";

export const Skincontext = createContext({});

export function SkincontextProvider({ children }) {
  const { Provider } = Skincontext;
  const [skinTypes, setSkinTypes] = useState();
  const [userSelectedOptions, setUserSelectedOptions] = useState({type: null, concern: null})
  
  useEffect(() => {
    fetch("http://localhost:5001/analyze-skin-api/us-central1/api/skinTypes")
      .then((res) => res.json())
      .then((data) => {
        data = data.sort((a, b) => a.index - b.index);
        setSkinTypes(data);
      })
      .catch(console.error);
  }, []);
  
  const value = {
    skinTypes, setSkinTypes, userSelectedOptions, setUserSelectedOptions
  };

  return <Provider value={value}>{children}</Provider>;
}