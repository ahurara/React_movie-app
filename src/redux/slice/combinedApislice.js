import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { trendingApi } from './trendingSlice';
import { movieApi } from './movieSlice';




export const fetchHomePageApi = createAsyncThunk('fetchHomePageApi', async (_, { dispatch }) => {
    const [movie, trending] = await Promise.all([
        dispatch(trendingApi('movies')),
        dispatch(movieApi())
    ]);

    console.log('dwdwd',movie)
   
    return {
        movie : movie.payload,
        trending : trending.payload,
    }
})

const combinedSlice = createSlice({
    name : 'CombinedApi',
    initialState:{
        movie :null,
        trending :[],
        loading :false,
        error:null
    },

    extraReducers: (builder)=>{

        builder.addCase(fetchHomePageApi.fulfilled , (state ,action)=>{
            state.loading = false;
            state.movie = action.payload.movie;
            state.trending = action.payload.trending;
        });

        builder.addCase(fetchHomePageApi.pending , (state)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(fetchHomePageApi.rejected , (state, action)=>{
            state.error = action.error.message;
            state.loading = false;
        })

    }
})

export const {reducer : combinedApiReducer} = combinedSlice;
export default combinedApiReducer;