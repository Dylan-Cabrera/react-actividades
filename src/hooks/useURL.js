import React, { useState } from 'react'
import { useCount } from './useCount';

export const useURL = () => {
    const [url, setUrl] = useState('https://thesimpsonsapi.com/api/characters/')

    const handleUrl = (endpoint) => {
        setUrl(`${url}${endpoint}`)
    }


  return {url, handleUrl}
}
