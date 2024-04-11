import React from 'react'
import { useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    
    const request = React.useCallback(async(url, options)=>{
        let response
        let json
        try{
            setError(false)
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
        }catch{
            json = null
            setError('Erro')
        }finally{
            setData([data])
            setLoading(false)
            return {response, json}
        }
    }, [])
    return {data, loading, error, request}
}

export default UseFetch
