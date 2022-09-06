import { useContext } from "react";
import { useNavigate } from "react-router";
import { Skincontext } from "../context/Skincontext";

export default function LandingPage() {
const{skinTypes}=useContext(Skincontext)

  let navigate = useNavigate();
  const handleGetStarted = () =>{navigate("/Dropdowns")}


  return (
    <>
      <div className="skinTypeWrapper">
        <img src="/assets/girls.jpg" />
        <div>
          {skinTypes &&
            skinTypes.map((skinType) => (
              <div className="descWrapper" key={skinType.id}>
                <div
                  className="circle"
                  style={{ backgroundColor: skinType.colour }}
                ></div>
                <p>{skinType.name}</p>
              </div>
            ))}
        </div>
      </div>
      <button onClick={handleGetStarted}>Get Started</button>
    </>
  );
}
