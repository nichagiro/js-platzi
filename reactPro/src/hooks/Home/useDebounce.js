import { useEffect, useState } from "react"

const useDebounce = ({ value, time }) => {
    const [data, setData] = useState('')

    useEffect(() => {
        const id = handleDebounce(value);
        return () => clearTimeout(id)

    }, [value])

    const handleDebounce = () => setTimeout(() => setData(value), time || 3000);

    return data
}

export default useDebounce


