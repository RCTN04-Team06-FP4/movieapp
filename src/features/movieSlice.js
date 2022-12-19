import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    loading: false,
    error: ""
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async (query) => 
    {
        try {
            let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`;
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return err.message;
        }
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            return { ...state, loading: true, error: "" };
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            if (action.payload.Response === "True") {
                return { ...state, movies: action.payload.Search, loading: false, error: "" };
            } else if (action.payload.Response === "False") {
                return { ...state, movies: action.payload.Error, loading: false };
            }
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            return { ...state, loading: false, error: action.error.message };
        });
    }
})

export default movieSlice.reducer;