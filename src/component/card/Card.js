import React from "react"
import "./card.css";

export const Card = (props) => {
    return (
        <div>
          <div className="card">
             <div className="head-img">
                <img  src={props.imgsrc} style={{width:"100%",height:"120px"}}></img>
             </div>
             <div className="head-text">
                <p>{props.text}</p>
                <p>{props.para}</p>
             </div>
            </div>

        </div>
    )
}
export default Card;
