import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try{
            const res = await axios.get(url);
            const data = await res.data
            setData(data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {data, loading, error};
}

export default useFetch