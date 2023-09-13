import React from "react";
import '../index.css';

const SearchCards = (propss) => {
    return (
        <>
        <div className="scard">
            <div className="col-md-12 "  >
                <img src={propss.img} className="simg " alt="Card e"/>
                <p style={{fontWeight:'bold',color:"white"}} >{propss.name}{propss.title}</p>
                <p style={{color:"white"}}>{propss.releaseDate}{propss.firstAir}</p>
                </div>
            </div>
        </>
    )

}

export default SearchCards;