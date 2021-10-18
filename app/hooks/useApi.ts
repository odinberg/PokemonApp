import { useState } from "react"

const useApi = <T = unknown>(apiFunction: Function) => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

     const request = async (...args: unknown[]) => {
        try {
                    setError(false)
                    setLoading(true)
                    const data = await apiFunction(...args)
                    setData(data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {data, error, loading, request};

}

export default useApi