import { useState, useEffect } from "react";

export default function LandingPage() {
  const [skinTypes, setSkinTypes] = useState();

  useEffect(() => {
    fetch("http://localhost:5001/analyze-skin-api/us-central1/api/skinTypes")
      .then((res) => res.json())
      .then((data) => {
        data = data.sort((a, b) => a.index - b.index);
        setSkinTypes(data);
      })
      .catch(console.error);
  }, []);

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
      <button>Get Started</button>
    </>
  );
}
