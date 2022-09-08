import { useEffect, useState, useContext } from "react";
import { Skincontext } from "../context/Skincontext";
import { useNavigate } from "react-router-dom";

export default function ReviewForm() {
  let navigate = useNavigate();

  const { setReviews } = useContext(Skincontext);

  const [newReview, setNewReview] = useState({
    review: "",
    name: "",
  });

//   const [reviewSent, setReviewSent] = useState(false);

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
      .then(() => {
        fetch("https://analyze-skin-api.web.app/reviews")
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
          })
          .catch(console.error);
        navigate("/reviews");
      })
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewReview({
      ...newReview,
      [e.target.name]: newValue,
    });
    console.log({ newReview });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section>
       
        <div id="form-box">
          <h1 className="title">Add Review</h1>
          <div className="content">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name">
                Name:
                <br />
                <input
                  name="name"
                  type="text"
                  value={newReview.name}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
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
                  onChange={(e) => handleChange(e)}
                  required={true}
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
        </div>
    </section>
  );
}
