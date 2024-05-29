import React, { useEffect} from "react";
import PopularCards from "./PopularCards";
import Skeleton from "./Skeleton";
import {useDispatch , useSelector}  from 'react-redux';
import { setSelectedType, trendingApi } from "../redux/slice/trendingSlice";

const Popular = () => {
    const dispatch = useDispatch();
   
    const selected = useSelector(state => state.trending.selectedType);
    const loading = useSelector(state => state.trending.loading);
    const post = useSelector(state => state.trending.trendings);

    useEffect(()=>{
        dispatch(trendingApi(selected));
      } ,[selected])

    const Movies = () => {
        dispatch(setSelectedType('movies'))
    }

    const Tv = () => {
        dispatch(setSelectedType('tv'))
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-container">

                    <div className='btnbox' style={{ marginLeft: '20px', }}>
                        <h3>What's Popular</h3>
                        <button className={`button1 ${selected === 'movies' ? "selected" : ''}`} onClick={Movies}>Movies</button>
                        <button className={`button2 ${selected === 'tv' ? "selected" : ''}`} onClick={Tv}>On Tv</button>
                        <button className={`button3 ${selected === 'theaters' ? "selected" : ''}`} onClick={() => {}}>In Theaters</button>
                    </div>
                </div>
            </div>
            {loading ?
                (<div className="row">
                    <div className="col-md-12">
                        <div className="popular_cards">
                            {




                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {

                                    return <Skeleton key={n} />
                                })


                            }
                        </div>
                    </div>
                </div>)
                :
                (<div className="row">
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