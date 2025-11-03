import { useState } from "react";


export const useCount = (initialValue) => {

    const [count, setCount] = useState(initialValue);

    const handleIncrement = (num) => {
        
        setCount(count + num)
    }

    const handleDecrement = (num) => {
        if(count == 1) return
        if(count - num < 0) return
        setCount(count - num)
    }

    const handleReset = () => {
        setCount(initialValue)
        //o..
        //setCount((value) => value = initialValue)
    }

    return [count,handleIncrement, handleDecrement, handleReset]
    
};