import React, { useEffect, useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Popular from "./components/Popular";

const Appp = () => {

    const [movie, setMovie] = useState(null);
    const [randomeMovie, setRandomMovie]= useState(null);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
            }
        };

        fetch('https://api.themoviedb.org/3/discover/movie?&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then((response) => response.json())
            .then((apiData) => {
                setMovie(apiData.results);
                const randomIndex = Math.floor(Math.random() * apiData.results.length);
                setRandomMovie(apiData.results[randomIndex]);
                console.log(apiData);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }, [])

   
        const divStyle = {
          backgroundImage: isloading ?  "none" :  `url(https://image.tmdb.org/t/p/w500${randomeMovie.poster_path})`}
        
    return (
        <>

            <div className="container-fluid " >
            { isloading ? <h1>Loading....</h1>:(
                <div className="row" >
                    <div className="col-md-12 col-12 main_screen" style={divStyle}>
                    
                        <div className="row">

                            <div className="col-md-8 col-12 right"  >
                                {/* navbar code */}
                                <Navbar />
                                <h5 style={{ paddingTop: '250px',color:'white'}}>Releaase Date {randomeMovie.release_date}</h5>
                                <h1 className="title ">{randomeMovie.original_title}</h1>
                                <button className="watch">Watch</button>
                            </div>


                            <div className="col-md-3 left" style={{ overflow: "auto", height: "calc(100vh - 56px)" }}>
                                <h3 style={{ fontWeight: "bold", color: 'white', paddingTop: '20px' }}>Robert downy Junior</h3>
                                <h5 style={{ color: 'grey' }}>movie director  </h5>
                                <div className="scrollable-cards ">
                                    <Card name="hello" img={`https://image.tmdb.org/t/p/w500${randomeMovie.poster_path}`} />
                                    <Card name="hello" img={`https://image.tmdb.org/t/p/w500${randomeMovie.backdrop_path}`}  />
                                     </div>
                            </div>
                        </div>

                    </div>


                </div>)
            }

                <div className="row" style={{ border: '1px solid pink' }}>
                    <div className="col-md-12 col-12 ">
                        <Popular />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Appp;