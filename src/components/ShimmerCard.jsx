import React from "react";
import '../index.css';

const Shimmercard= ({type}) => {
    const classes = `skeleton ${type}`;

    return (
        <>
        <div className={classes} >
          
            </div>
        </>
    )

}

export default Shimmercard;