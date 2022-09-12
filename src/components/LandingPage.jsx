import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function LandingPage() {
const{skinTypes}=useContext(Skincontext)

  let navigate = useNavigate();
  const handleGetStarted = () =>{navigate("/Dropdowns")}


  return (
    <>
    <p>DESIGNED WITH WOMEN OF COLOUR IN MIND. WE ARE A BRAND THAT IS COMMITTED TO BEING A PART OF THE SKIN JOURNEY, CONNECTING WOMEN OF COLOUR WITH BRANDS SPECIFICALLY CREATED FOR THE SKIN NEEDS OF WOMEN OF COLOUR. DOING OUR PART TO INSPIRE THE CONFIDENCE WE ALL SHOULD FIND IN OUR SKIN.</p>
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
