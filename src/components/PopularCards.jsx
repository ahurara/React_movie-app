import React from "react";
import '../index.css';

const PopularCards = (propss) => {
    return (
        <>
        <div className=" pcard">
            <div className="col-md-12 "  >
                <img src={propss.img} className="pimg" alt="Card e"/>
                <p>Movie Name</p>
                <p>sep 16, 2022</p>
                </div>
            </div>
        </>
    )

}

export default PopularCards;