import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ maxWidth: "200px",margin: "20px",borderRadius:'0' ,border:'1px solid grey'}}>
                <img src={props.img} className="card-img-top" alt="Card Image" style={{ height: "130px",  width:'200px' ,  objectFit: "cover" }}/>
                
            </div>
        </>
    )

}

export default Card;