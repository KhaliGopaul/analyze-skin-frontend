import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewForm() {
  let navigate = useNavigate();

  const [newReview, setNewReview] = useState({
    review: "",
    name: ""
  });

  const [ reviewSent, setReviewSent ] = useState(false) 

  const [setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://analyze-skin-api.web.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then(() => setReviewSent(true))
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewReview({
      ...newReview,
      [e.target.name]: newValue,
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section>
        {!reviewSent ? <div id="form-box">
        <h1 className="title">Add Review</h1>
        <div className="content">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">
              Name:
              <br />
              <textarea
                name="name"
                cols="40"
                rows="10"
                className="name-box"
                value={newReview.name}
                onChange={(e)=>handleChange(e)}
                required={true}
                type="text"
              ></textarea>
            </label>
            <br />
            <label htmlFor="reviewOfResults">
              Review:
              <br />
              <textarea
                className="review-box"
                name="review"
                type="text"
                value={newReview.review}
                onChange={(e)=>handleChange(e)}
                required={true }
                cols="40"
                rows="10"
              ></textarea>
            </label>
            <br />
            <button id="btns" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>: <>Your Skin Rocks!</>} 
      
    </section>
  );
}