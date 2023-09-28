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



  const img = {
    width: '40vh',
    height: '65vh',
    borderRadius: '10px'
  }

  return (
    <>
      {loading ?
        <h1>loading...</h1>
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
              <h3>PRODUCTION  </h3><i class="bi bi-camera-video"></i>

              <div style={{ lineHeight: '.5' }}>
              {post.production_companies.map((pc) => {
                return <p key={pc.id}>{pc.name}</p>;
              })}
              </div>

             

            </div>


            <div className="col-md-6">
              <h1 >{post.title}</h1>
              <br />
              <p style={{ fontWeight: 'bold' }}>1h 47min ,2019</p>
              <br />
              <p>{post.overview}</p>


            </div>


            <div className="col-md-3 pt-3" >
              <img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} style={img} />
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