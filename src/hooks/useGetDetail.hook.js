import { useEffect } from "react";
import axios from "axios";

const useGetDetail = (id, setIsLoading, setData) => {
    useEffect(() => {
        setIsLoading(true)
        const params = {
            apikey: process.env.REACT_APP_API_KEY,
            i: id 
        };
        const fetchDetail = async() => {
            try {
                await axios.get(
                "http://www.omdbapi.com/", 
                { params }
                )
            .then( async (response) => {
                setData(response.data)
                setIsLoading(false)
            });
            } catch(error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        fetchDetail()
    }, [id])
}

export default useGetDetail