import React, { useCallback, useEffect, useState } from 'react';
import Input from '@components/custom/Input';
import useDebounce from '../../hooks/Home/useDebounce';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const data = useDebounce({ value: search, time: 500 });

    useEffect(() => {
        props.setSearch(data);
        console.log("🚀 ~ file: Search.jsx:11 ~ useEffect ~ data", data)
    }, [data])

    const handleChange = useCallback((e) => setSearch(e.target.value), [])

    return (
        <div style={{ maxWidth: 300 }} className='m-4'>
            <Input
                name='search'
                label='Buscar'
                container='m-auto'
                onChange={(handleChange)}
                type='search'
            />
        </div >
    )
}

export default Search

