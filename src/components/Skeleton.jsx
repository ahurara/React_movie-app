import React from "react";
import Shimmercard from "./ShimmerCard";

const Skeleton=()=>{

    return(
        <>
         <>
        <div className=" pcard" >
            <div className="col-md-12 "  >
            <Shimmercard type={"thumbnail"}/>
            <Shimmercard type={"text"}/>
            <Shimmercard type={"title"}/>
                </div>
            </div>
        </>
           
           
        </>
    )
}

export default Skeleton;