import { useContext } from "react";
import { Skincontext } from "../context/Skincontext";

export default function Reviews (){

    const {reviews} = useContext(Skincontext)

    console.log(reviews)

    return(
        <>
        {reviews && reviews.map(review =>(
            <div key={review.id}>
                <p>{review.name}</p>
                <p>{review.review}</p>
            </div>
        ))}
        </>
    )
}