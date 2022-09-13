import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function LandingPage() {
const{skinTypes}=useContext(Skincontext)

  let navigate = useNavigate();
  const handleGetStarted = () =>{navigate("/Dropdowns")}


  return (
    <>
    <p>Designed with women of colour in mind, Analyze Skin is committed to being a part of the skin journey, connecting women of colour with brands specifically created for the skin needs of women of colour. Doing our part to inspire the confidence we all should find in our skin.</p>
      <div className="skinTypeWrapper">
        {/* <img src="/assets/girls.jpg" /> */}
        <div className="mainimage"></div>
        <div>
            <h2>Know Your Skin Type</h2>
          {skinTypes &&
            skinTypes.map((skinType) => (
              <div className="descWrapper" key={skinType.id}>
                <div
                  className="circle"
                  style={{ backgroundColor: skinType.colour }}
                ></div>
                <div>
                <p>{skinType.name}</p>
                <p>{skinType.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="btncontainer">
      <button className="btn getstarted" onClick={handleGetStarted}>Get Started</button>
      </div>
    </>
  );
}
