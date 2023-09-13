import React, { useEffect, useState } from "react";
import '../../index.css';
import { useParams } from "react-router-dom";
import Popular from "../../components/Popular";
import Navbar from "../../components/Navbar";
import Skeleton from "../../components/Skeleton";
import PopularCards from "../../components/PopularCards";
import SearchCards from "../../components/SearchCards";



const SearchPage = (props) => {

    const { post } = useParams();
    const [loadingState, setLoadingState] = useState(true);

    
    // Check if 'post' is a valid JSON string
    const[movie,setmovie]=useState(post);
    console.log(movie);

    useEffect(() => {
        
        setLoadingState(true);
            setTimeout(()=>{
                
                if(post){
                    const options = {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
                        }
                    };
                    fetch(`https://api.themoviedb.org/3/search/movie?query=${post}&language=en-US`, options)
                        .then((response) => response.json())
                        .then((response) => {
                            console.log(response.results);
                            setmovie(response.results);
                            setLoadingState(false);
                           
                        })
                        .catch(err => console.error(err))
                        .catch((err) => {
                            console.log(err);
                            setLoadingState(false);
                        })
                }
                
            },3000)
           
        }

    , [post])


    return (
        <>
            <div className="container-fluid bg-dark" style={{}}>
                <div className="row" >
                    <div className="col-md-12 col-12" >
                        <div className="row no-gutters m-0" >
                            <div className="col-md-12 col-12 right"  >
                                {/* navbar code */}
                                <Navbar />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-md-12 col-12 ">


                        {loadingState ?
                            (
                                <div className="searchCards">
                                    {




                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {

                                            return <Skeleton key={n} />
                                        })


                                    }
                                </div>
                            )
                            :
                            (
                                <div className="searchCards">
                                    {
                                        movie.map((post) => {
                                            return <SearchCards firstAir={post.first_air_date} releaseDate={post.release_date} title={post.title} img={`https://image.tmdb.org/t/p/w500${post.poster_path}`} key={post.id} name={post.name} />

                                        })
                                    }
                                </div>
                            )
                        }





                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchPage;