import {  configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import trendingReducer from "./slice/trendingSlice";
import combinedApiReducer from "./slice/combinedApislice";

export const store = configureStore({
  reducer: {
     movie : movieReducer,
     trending : trendingReducer,
      combined : combinedApiReducer,
  },
});
