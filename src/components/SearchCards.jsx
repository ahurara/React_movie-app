import React from "react";
import '../index.css';
import noPoster from '../assets/images (2).jpeg';

const SearchCards = (propss) => {
    return (
        <>
        <div className="scard align-center">
            <div className="col-md-12 "  >
                <img src={propss.img?  `https://image.tmdb.org/t/p/w500${propss.img} `: noPoster}  className="simg " alt="Card e"/>
                <p style={{fontWeight:'bold',color:"white",textAlign:'center',paddingTop:'12px'}}  className="">{propss.name}{propss.title}</p>
                {/* <p style={{color:"white",textAlign:'center'}} className="p-0">{propss.releaseDate}{propss.firstAir}</p> */}
                </div>
            </div>
        </>
    )

}

export default SearchCards;