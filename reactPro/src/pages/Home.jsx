import '@styles/app.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { getCaracteres } from '@utils/axios/caracteres';
import Caracteres from '@components/home/caracteres';
import Search from '@components/home/Search';
import Form from '@components/custom/Form';
import useFavorite from '@hooks/Home/useFavorite';
import Favorites from '@components/home/Favorites';
import types from '@context/personajes/Types';
import { useDispatch, useStore } from '@context/personajes/Provider';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Home = () => {
    const [search, setSearch] = useState('');
    const { favorite, setFavoritePerson } = useFavorite();
    const dispatch = useDispatch();
    const { personajes } = useStore();

    useEffect(() => {
        // getData();
        axios.get('http://localhost:3001/articulo')

    }, []);

    const getData = async () => {
        const response = await getCaracteres();
        dispatch({
            type: types.SET_PERSONAJE,
            payload: response.data.results
        })
    }

    const filterPerson = useMemo(() =>
        personajes.filter(
            person => person.name.toLowerCase().includes(search.toLowerCase())
        ), [search, personajes]
    );


    return (
        <>
            <Helmet>
                <title> Caricaturas </title>
            </Helmet>
            <Form onSubmit={(data) => console.log(data)}>
                <Search setSearch={setSearch} />
                <b className='mx-3'>Lista de favoritos:</b>
                {
                    favorite.map(fav => (
                        <Favorites  {...fav} key={`favorite_${fav.id}`} />
                    ))
                }
                <div className='d-flex justify-content-around flex-wrap'>
                    {
                        filterPerson.map(person => (
                            <div
                                key={`caracter_${person.id}`}
                                onClick={() => setFavoritePerson(person)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Caracteres className='my-3' {...person} />
                            </div>
                        ))
                    }
                </div>
            </Form>
        </>
    )
}

export default Home