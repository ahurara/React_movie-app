import React from "react";
import '../index.css';

const PopularCards = (propss) => {
    return (
        <>
        <div className=" pcard">
            <div className="col-md-12 "  >
                <img src={propss.img} className="pimg " alt="Card e"/>
                <p style={{fontWeight:'bold'}} >{propss.name}{propss.title}</p>
                <p >{propss.releaseDate}{propss.firstAir}</p>
                </div>
            </div>
        </>
    )

}

export default PopularCards;