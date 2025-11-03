import { useState, useEffect } from 'react'


export const useFetch = (endpoint) => {
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
    
                const response = await fetch(`https://thesimpsonsapi.com/api/characters/${endpoint}`);
                const newData = await response.json();
                
                setFetchData({
                    data: newData,
                    isLoading: false
                })
                console.log(newData)
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            getFetch();

            return () => {
             console.log(".");
            };
        }, [endpoint]);

  return {fetchData, getFetch}
}
