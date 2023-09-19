import React from "react";
import '../index.css';
import noPoster from '../assets/images (2).jpeg';

const SearchCards = ({name,img ,key,title,onClick}) => {
    return (
        <>
        
        <div className="scard align-center" onClick={onClick}>
            <div className="col-md-12 "  >
                <img src={img?  `https://image.tmdb.org/t/p/w500${img} `: noPoster}  className="simg " alt="Card e"/>
                <p style={{fontWeight:'bold',color:"white",textAlign:'center',paddingTop:'12px'}}  className="">{name}{title}</p>
                <p style={{color:'white'}}>{key}</p>
                {/* <p style={{color:"white",textAlign:'center'}} className="p-0">{propss.releaseDate}{propss.firstAir}</p> */}
                </div>
            </div>
        </>
    )

}

export default SearchCards;