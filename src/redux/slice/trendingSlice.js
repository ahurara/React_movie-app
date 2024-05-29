import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const trendingApi = createAsyncThunk('trendingApi', async(type)=>{

    const endpoint = type === 'movies'
     ?
     'https://api.themoviedb.org/3/trending/movie/day?language=en-US' 
     :
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
   
       const trendingResponse = await axios.get(endpoint, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmEyYjI5ZTJjNjdkOTJlMDJmYjIwYzU2YjM1ZjA4OCIsInN1YiI6IjY0ZWM4OWZmNTI1OGFlMDBhZGQ1Yzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CxVu2Z09zDB96mUbxlqSoErCA0z-iaLREQiKtWxdrR0'
            }
        })
    console.log("trending slice here")
    return  trendingResponse.data
    
})

const trendingApiSlice = createSlice({
    name : 'trending',
    initialState:{
        selectedType :'movies',
        trendings :[],
        loading :false,
        error:null
    },

    reducers : {
        setSelectedType :(state, action)=>{
            state.selectedType=action.payload;
        }
    },

    extraReducers: (builder)=>{

        builder.addCase(trendingApi.fulfilled , (state ,action)=>{
            state.loading = false;
            state.trendings = action.payload.results;
        });

        builder.addCase(trendingApi.pending , (state)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(trendingApi.rejected , (state, action)=>{
            state.error = action.error.message;
            state.loading = false;
        })

    }
})

export const {setSelectedType} = trendingApiSlice.actions;

export const {reducer : trendingReducer} = trendingApiSlice;
export default trendingReducer;