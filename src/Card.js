import React from "react";
import './Card.css';
const Card =({
    title,description,image, price
})=>{
    return(
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-price"> {price}</p>
            <p className="card-description">{description}</p>
            
            <button className="card-button">Buy now</button>
        </div>
    )
}
export default Card;