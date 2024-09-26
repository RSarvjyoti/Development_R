import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {

        const fetchData = async () => {
            try {
                let response = await axios.get(url);
                setData(response.data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            setLoading(true);
            setError(null);
        };

    }, [url]);

    
    return {data, loading, error};
}