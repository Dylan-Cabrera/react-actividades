import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [fetchData, setFetchData] = useState({
        data: null,
        isLoading: true
    });
    
        const getFetch = async () => {
            try { 
                setFetchData({
                    ...fetchData,
                    isLoading: true //para que vuelva a ser true al comienzo de cada iteracion
                });
    
                const response = await fetch(url);
                const newData = await response.json();
                console.log(newData)
                
                setFetchData({
                    data: newData,
                    isLoading: false
                })
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            getFetch();

            return () => {
             console.log(".");
            };
        }, [url]);

  return {fetchData, getFetch}
}
