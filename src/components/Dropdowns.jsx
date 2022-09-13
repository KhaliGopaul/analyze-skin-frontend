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
        All women have a unique skin story. For women of colour the story to
        healthy skin is often complicated. Analyze skin was founded based on a
        personal battle with skin issues. Analyze skin empowers people of colour
        by providing them with specifically crafted skincare products, raising
        awareness on the unique needs of their skin and helping to regain their
        own self-confidence through hydrated healthy skin
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
