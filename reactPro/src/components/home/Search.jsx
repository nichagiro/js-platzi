import React, { useCallback } from 'react';
import Input from '@components/custom/Input';

const Search = (props) => {
    const handleChange = useCallback((e) => {
        props.setSearch(e.target.value);
    }, [])

    return (
        <div style={{ maxWidth: 300 }} className='m-4'>
            <Input
                name='search'
                label='Buscar'
                container='m-auto'
                onChange={handleChange}
                type='search'
            />
        </div >
    )
}

export default Search

