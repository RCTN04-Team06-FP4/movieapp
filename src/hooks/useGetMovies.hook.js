import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "../features/movieSlice";
import { useEffect } from 'react';

const useGetMovies = (search) => {
    const { movies, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(search));
    }, [search]);
    return {movies, loading}
}

export default useGetMovies