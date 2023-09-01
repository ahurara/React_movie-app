import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import sdata from "./sdata";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Popular from "./components/Popular";

const Appp = () => {


    return (
        <>
            <div className="container-fluid " >
                <div className="row" >
                    <div className="col-md-12 col-12 main_screen">

                        <div className="row">

                            <div className="col-md-8 col-12 right"  >
                                {/* navbar code */}
                                <Navbar />
                                <h1 className="title ">Movie Name</h1>
                                <button className="watch">Watch</button>
                            </div>


                            <div className="col-md-3 left" style={{ overflow: "auto", height: "calc(100vh - 56px)" }}>
                                <h3 style={{ fontWeight: "bold", color: 'white',paddingTop:'20px' }}>Robert downy Junior</h3>
                                <h5 style={{ color: 'grey' }}>movie director  </h5>
                                <div className="scrollable-cards ">
                                    <Card name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWoCGlUVr7am8QyDi2hgwbvdKpXoeIGkXSg&usqp=CAU" />
                                    <Card name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWoCGlUVr7am8QyDi2hgwbvdKpXoeIGkXSg&usqp=CAU" />
                                    <Card name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWoCGlUVr7am8QyDi2hgwbvdKpXoeIGkXSg&usqp=CAU" />
                                      </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="row" style={{ border: '1px solid pink' }}>
                    <div className="col-md-12 col-12 ">
                       <Popular/>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Appp;