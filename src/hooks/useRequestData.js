import React, {useState, useEffect} from "react";
import axios from "axios";

export function useRequestData (url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async () => {
        try {
            const response =  await axios.get(`${url}`)
            setIsLoading(false)
            setData(response.data);
        } catch (error) {
            console.log(error);
            setError(true)
            setIsLoading(false)
            
        }

}

useEffect(() => {
    getData()
}, [])

return [data, isLoading, error]

}