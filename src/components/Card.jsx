import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ maxWidth: "300px",margin: "20px",borderRadius:'0' }}>
                <img src={props.img} className="card-img-top" alt="Card Image" style={{ height: "130px",  width:'180px' ,  objectFit: "cover" }}/>
                
            </div>
        </>
    )

}

export default Card;