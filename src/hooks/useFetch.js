import React from 'react'
import { useURL } from './useURL';

export const useFetch = (initialValue) => {
    const [fetchData, setFetchData] = useState(initialValue);
    
        const {data, isLoanding} = fetchData;

    
        const getFetch = async () => {
            try {
                const {url} = useURL() 
                setFetchData({
                    ...fetchData,
                    isLoanding: true //para que vuelva a ser true al comienzo de cada iteracion
                });
    
                const response = await fetch(url);
                const data = await response.json();
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            getFetch();

            return () => {
             console.log(".");
            };
        }, [getFetch]);

  return {fetchData}
}
