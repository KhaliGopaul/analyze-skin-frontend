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
    e.preventDefault();
    navigate("/Results");
  };

  console.log({ userSelectedOptions });
  return (
    <>
      <p>
        ALL WOMEN HAVE A UNIQUE SKIN STORY. FOR WOMEN OF COLOUR THE STORY TO
        HEALTHY SKIN IS OFTEN COMPLICATED. ANALYZE SKIN WAS FOUNDED BASED ON A
        PERSONAL BATTLE WITH SKIN ISSUES. SEEKING INFORMATION AND RESOURCES FOR
        SPECIFIC PRODUCTS FOR SKIN TYPES 4-6 PROVED CHALLENGING, WHICH LED TO
        THE MISSION OF FINDING PRODUCTS MADE FOR DARKER SKIN TONES AND PROVIDING
        KNOWLEDGE OF RELIABLE SOLUTIONS. ANALYZE SKIN EMPOWERS PEOPLE OF COLOUR
        BY PROVIDING THEM WITH SPECIFICALLY CRAFTED SKINCARE PRODUCTS, RAISING
        AWARENESS ON THE UNIQUE NEEDS OF THEIR SKIN AND HELPING TO REGAIN THEIR
        OWN SELF-CONFIDENCE THROUGH HYDRATED HEALTHY SKIN
      </p>
      <div className="skinTypeWrapper">
        <div className="profile"></div>
        <form>
          <h3 className="chooseone"> CHOOSE ONE </h3>
          <select /* onChange={(e) => handleChange(e)} */ name="type">
            <option value="">Select Skin Type</option>
            {skinTypes &&
              lastThree.map((skinType) => (
                <option /* value={skinType.name}  */ key={skinType.id}>
                  {skinType.name}
                </option>
              ))}
          </select>
          <br />
          <select onChange={(e) => handleChange(e)} name="concern">
            <option value="">Select Skin Concern</option>
            <option value="Acne">Acne</option>
            <option value="Hyperpigmentation">Hyperpigmentation</option>
            <option value="Dry Skin">Dry Skin</option>
          </select>
          <br />
          <button className="btn" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
