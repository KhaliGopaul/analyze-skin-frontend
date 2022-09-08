import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function Dropdowns() {
  let navigate = useNavigate();
  const { skinTypes, setUserSelectedOptions, userSelectedOptions } =
    useContext(Skincontext);

  const lastThree = skinTypes && skinTypes.slice(-3);

  const handleChange = (e) => {
    setUserSelectedOptions({
      ...userSelectedOptions,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/Results");
  };

  console.log({userSelectedOptions});
  return (
    <> 
    <p> 
WE UNDERSTAND THE DISTINCT SKIN JOURNEY OUR WOMEN OF COLOR ARE ON AND WE DESIRE TO TACKLE THE FIGHT WITH LOCATING PRODUCTS FOR DIVERSE WOMEN TO LEAVE SKIN HEALTHY, BEAUTIFUL AND STRONG SO THAT YOU CAN ALWAYS BUT YOUR BEST FOOT FORWARD. 
</p>
    <form>
      <select /* onChange={(e) => handleChange(e)} */ name="type">
        <option value="">Select Skin Type</option>
        {skinTypes &&
          lastThree.map((skinType) => (
            <option /* value={skinType.name}  */key={skinType.id}>
              {skinType.name}
            </option>
          ))}
      </select>
      <select onChange={(e) => handleChange(e)} name="concern">
        <option value="">Select Skin Concern</option>
        <option value="Acne">Acne</option>
        <option value="Hyperpigmentation">Hyperpigmentation</option>
        <option value="Dry Skin">Dry Skin</option>
      </select>
      <button onClick={(e)=>handleSubmit(e)}>Submit</button>
    </form>
    </>
  );
}
