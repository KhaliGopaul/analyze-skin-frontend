import { useContext } from "react";
import { Skincontext } from "../context/Skincontext";

export default function Reviews (){

    const {reviews} = useContext(Skincontext)

    console.log(reviews)

    return(
        <section className="btngroup reviews">
            <h2 style={{textAlign: "center"}}>Reviews</h2>
        {reviews && reviews.map(review =>(
            <div className="review" key={review.id}>
                <p style={{fontWeight:800   }}>{review.name}</p>
                <p>{review.review}</p>
            </div>
        ))}
        </section>
    )
}