import React, { useEffect, useState } from 'react'
import Nav from '@components/Nav'
import HMtai from 'hmtai'
import CardHentai from '@components/CardHentai';
import Sppiner from '@components/Sppiner';
import { sendNotificate } from '@functions/notificate';

const hmtai = new HMtai();

const Home = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        onStart()
    }, [])

    const onStart = async () => {
        setLoad(true)
        try {
            setData([
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai(),
                await hmtai.nsfw.hentai()
            ])
        } catch ({ message }) {
            console.log("🚀 ~ file: Home.jsx:32 ~ onStart ~ message", message)        
        }
        setLoad(false)
        setTimeout(() => {
            sendNotificate({ title: 'Carga Completa', body: ':)', img: '' })
        }, 500);
    }

    return (
        <>
            <Sppiner display={load} />
            <Nav />
            {
                data.length === 0 &&
                <img src='images/wallpaper.jpg' alt='fondo' style={{ height: '85vh', width: '100%' }} />
            }
            <div className="container">
                <div className='d-flex flex-wrap my-3'>
                    {
                        data.map((item, index) => (
                            <CardHentai key={index} src={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home