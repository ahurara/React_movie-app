import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../index.css';

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(true);
  const [post,setPost]=useState(null);

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

 

  const img={
    width:'40vh',
    height:'65vh',
    borderRadius:'10px'
  }

  return (
    <>
    {loading?
  <h1>loading...</h1>
    :
    (<div className="container-fluid " style={containerStyling}>
        <div className="row styling" >
          <div className="col-md-3">
            <h2>Voting : 7.7</h2>
            <br />

            <h3>GENRE</h3>

            <div style={{ lineHeight: '.5' }}>

              <p>Comedy</p>
              <p>Thriller</p>
              <p>Drama</p>

            </div>


            <br />
            <h3>DIRECTOR </h3><i class="fa fa-camera-video"></i>

            <p>Loren Scafiera</p>
            <br />

            <h3>PRODUCER</h3>
            <div style={{ lineHeight: '0.5' }}>
              <p>loren ipsum</p>
              <p>loren ipsum</p>
              <p>loren ipsum</p>
            </div>

          </div>


          <div className="col-md-6">
            <h1 >Avengers</h1>
            <br />
            <p style={{ fontWeight: 'bold' }}>1h 47min ,2019</p>
            <br />
            <p>In such cases, it's a good idea to inspect the element using your browser's developer tools to see if
              there are any overriding CSS styles affecting the padding. Ensure that there are no other styles applied
              that might be conflicting with Bootstrap's utility classes</p>


          </div>


          <div className="col-md-3 pt-3" >
            <img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} style={img}/>
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