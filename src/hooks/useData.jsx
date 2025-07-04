import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useData(url) {
    const [data, setData] = useState();

    async function fetchData() {
        try {
            const response = await axios.get(url);
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {
       data 
    }
}
