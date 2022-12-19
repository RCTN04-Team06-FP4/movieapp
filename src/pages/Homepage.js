import React, { useEffect }  from 'react'
import MovieCard from '../components/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "../features/movieSlice";
import ReactLoading from "react-loading";


const Homepage = ({ search }) => {

    const { movies, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(search));
    }, [search]);

    if (loading) {
        return (
            <div className='grid h-screen place-items-center'>
                <ReactLoading type="spin" color="red" />
            </div>
        );
    }

    if (movies === "Movie not found!") {
        return (
            <div className='grid h-screen place-items-center'>
                <h1 className='text-3xl font-bold text-gray-800'>Movie not found!</h1>
            </div>
        );
    }

    if (movies === "Too many results.") {
        return (
            <div className='grid h-screen place-items-center'>
                <h1 className='text-3xl font-bold text-gray-800'>Too many results! please be more specific.</h1>
            </div>
        );
    }

    return (
        <div className="text-slate-800 p-4 bg-gray-50 h-screen shadow-inner">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((item) => (
                    <MovieCard key={item.imdbID} id={item.imdbID} image={item.Poster} title={item.Title} year={item.Year}/>
                ))}
                
            </div>
        </div>    
    )
}

export default Homepage