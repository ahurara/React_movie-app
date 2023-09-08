import React, { useEffect, useState } from "react";
import PopularCards from "./PopularCards";

const Popular = () => {

    const [post, setPost] = useState(null);
    const [selected, setSelected] = useState('movies');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (selected === "movies") {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
                    }
                };
    
                fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
                    .then(response => response.json())
                    .then((ApiData) => {
                        // console.log(ApiData.results)
                        setPost(ApiData.results)
                        setLoading(false);
                    })
                    .catch(err => console.error(err));
            }
            else if (selected === "tv") {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
                    }
                };
    
                fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
                    .then(response => response.json())
                    .then((ApiData) => {
                       // console.log(ApiData)
                        setPost(ApiData.results)
                        setLoading(false)
                    })
                    .catch(err => console.error(err));
            }
    
        }, 1000);
       
    }, [loading])



    const Movies = () => {
        setSelected('movies');
        setLoading('true');
    }

    const Tv = () => {
        setSelected('tv');
        setLoading('true');
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-container">

                    <div className='btnbox' style={{ marginLeft: '20px', }}>
                        <h3>What's Popular</h3>
                        <button className={`button1 ${selected === 'movies' ? "selected" : ''}`} onClick={Movies}>Movies</button>
                        <button className={`button2 ${selected === 'tv' ? "selected" : ''}`} onClick={Tv}>On Tv</button>
                        <button className={`button3 ${selected === 'theaters' ? "selected" : ''}`} onClick={() => { setSelected('theaters') }}>In Theaters</button>
                    </div>
                </div>
            </div>
            {loading ? <h1>Loading...</h1> : (<div className="row">
                <div className="col-md-12">
                    <div className="popular_cards">
                        {
                            post.map((post) => {
                                return <PopularCards firstAir={post.first_air_date} releaseDate={post.release_date} title={post.title} img={`https://image.tmdb.org/t/p/w500${post.poster_path}`} key={post.id} name={post.name} />

                            })
                        }
                    </div>
                </div>
            </div>)
            }
        </>
    )
}

export default Popular;