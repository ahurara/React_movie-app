import React, { useEffect } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import {useDispatch , useSelector}  from 'react-redux';
//import { fetchHomePageApi } from "./redux/slice/combinedApislice";
import { movieApi } from "./redux/slice/movieSlice";

const App = () => {

  const dispatch = useDispatch();

  
  
  const randomeMovie =  useSelector(state => state.movie.movie);
  const isloading = useSelector(state => state.movie.loading);

    useEffect(()=>{
      dispatch(movieApi());
      
     
    } ,[dispatch])
    
   // console.log('hi',randomeMovie)
    //console.log(isloading)

    const divStyle = {
        backgroundImage: isloading || !randomeMovie ? "none" : `url(https://image.tmdb.org/t/p/w500${randomeMovie.backdrop_path})`
    }

    return (
        <>

            <div className="container-fluid " >
                {isloading || !randomeMovie ? <div className="row "  >
                    <div className="col-md-12 mx-auto mainImg pt-5" style={{gap:'5px',height:'85vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div className="spinner-border loader" role="status" >
                    <span className="visually-hidden" >Loading...</span>
                </div>
                
                <h1>Loading...</h1>
                    </div>
                </div> : (
                 randomeMovie &&(
                    <div className="row" >

                        <div className="col-md-12 col-12 main_screen g-0" style={divStyle}>

                            <div className="row no-gutters m-0 g-0" >
                                <div className="col-md-12 col-12 right g-0 p-4"  >
                                    {/* navbar code */}
                                    <Navbar />
                                    <h5 style={{ paddingTop: '250px', color: 'white',  WebkitTextStroke: ' 0px black     ' }}>Release Date {randomeMovie.release_date}</h5>
                                    <h1 className="title ">{randomeMovie.original_title}</h1>
                                    <button className="watch ">Watch</button>
                                </div>
                            </div>

                        </div>
                    </div>)
                )
                }

                <div className="row" >
                    <div className="col-md-12 col-12 ">
                        <Popular />
                    </div>


                </div>

            </div>
        </>
    )
}

export default App;