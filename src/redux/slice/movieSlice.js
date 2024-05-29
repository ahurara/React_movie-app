import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const movieApi = createAsyncThunk('movieApi', async()=>{

    const pageNo = Math.floor(Math.random() * 500) + 1; //generating random page number

    const movieResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?&include_video=false&include_adult=true&language=en-US&page=${pageNo}&sort_by=popularity.desc`,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
            }
        })

    const randomMovieIndex = Math.floor(Math.random() * movieResponse.data.results.length);
    const randomMovie = movieResponse.data.results[randomMovieIndex];
    console.log("movie slice here")
  
    return randomMovie 
       
    
})

const movieApiSlice = createSlice({
    name : 'movie',
    initialState:{
        movie :[],
        loading :false,
        error:null
    },

    extraReducers: (builder)=>{

        builder.addCase(movieApi.fulfilled , (state ,action)=>{
            state.loading = false;
            state.movie = action.payload;
        });

        builder.addCase(movieApi.pending , (state)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(movieApi.rejected , (state, action)=>{
            state.error = action.error.message;
            state.loading = false;
        })

    }
})

export const {reducer : movieReducer} = movieApiSlice;
export default movieReducer;