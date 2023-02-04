import Layout from '@layouts/Layout';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link';

const CaracterCard = dynamic(() => import('@components/caracters/CaracterCard'), { suspense: true })

interface Caracter {
  name: string,
  species: string,
  url: string,
  image: string,
  id: string
}

export async function getStaticProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await res.json()
  return { props: { data: results } }
}

export default function Home({ data }: any) {
  const [caracters, setCaracters] = useState<Caracter[]>([]);

  useEffect(() => setCaracters(data), [])

  return (
    <Layout >
      <Suspense fallback={`Loading...`}>
        <div className='row g-3 text-center w-100 px-5 py-3'>
          {caracters.map(item =>
            <Link href={`caracters/${item.id}`} key={item.name} className="col" style={{ cursor: 'pointer' }}>
              <CaracterCard  {...item} />
            </Link>
          )}
        </div>
      </Suspense>
    </Layout >
  )
}
