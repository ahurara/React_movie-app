import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../index.css';

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        setPost(response);
        
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [])

  const containerStyling = {
    backgroundImage: ' linear-gradient( #eb2d98, #0294C3)',
    color: 'white',
    backgroundColor: ' #252424',
    backgroundBlendMode: 'overlay',
  }

  function minutesToHoursAndMinutes(minutes ,year) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const yeara=year.split('-')[0];
  
    return `${hours}h ${remainingMinutes}min ,${yeara}`;
  }

  
  


  return (
    <>
      {loading ?
        <div className="row">
                    <div className="col-md-12 mx-auto text-center pt-5">
                    <div class="spinner-border " role="status" style={{width:'15vh',height:'15vh'}}>
                    <span class="visually-hidden" >Loading...</span>
                </div>
                    </div>
                </div>
        :
        (<div className="container-fluid " style={containerStyling}>
          <div className="row styling" >
            <div className="col-md-3">
              <h2>Voting :{post.popularity}</h2>
              <br />

              <h3>GENRE</h3>

              <div style={{ lineHeight: '.5' }}>
                {post.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}



              </div>


              <br />
              <h3>PRODUCTION  <i class="bi bi-camera-reels-fill"></i></h3>

              <div style={{ lineHeight: '.5' }}>
              {post.production_companies.map((pc) => {
                return <p key={pc.id}>{pc.name}</p>;
              })}
              </div>

             

            </div>


            <div className="col-md-6">
              <h1 className="titledetail">{post.title}</h1>
              <br />
              <p style={{ fontWeight: 'bold' }}>{
                minutesToHoursAndMinutes(post.runtime,post.release_date)

              }</p>
              <br />
              <p>{post.overview}</p>


            </div>


            <div className="col-md-3 pt-3" >
              <img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} className="imgDetail"  />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: '#363636', minHeight: '50vh' }}>

            </div>

          </div>
        </div>
        )
      }
    </>
  )
}

export default MovieDetails;