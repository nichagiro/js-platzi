import React from 'react';
import Layout from '@layouts/Layout';
import CaracterCard from '@components/caracters/CaracterCard';

const API = 'https://rickandmortyapi.com/api/character';

type Data = {
  id: string
}

// blocking: espera, true: Route.isFallback , false 404
export async function getStaticPaths({ locales }: any) {
  const res = await fetch(API);
  const { results } = await res.json()

  const paths = results
    .map(({ id }: Data) => ({ params: { id: id.toString() } }))
    .flatMap((path: any) => locales.map((locale: any) => ({ locale, ...path })))
    
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const id = params.id
  const res = await fetch(`${API}/${id}`);
  const data = await res.json()
  return { props: { data }, revalidate: 5 * 60 }
}

const Caracter = ({ data }: any) => {

  return (
    <Layout>
      <div className='w-100 d-flex justify-content-center py-5 my-5'>
        <CaracterCard {...data} />
      </div>
    </Layout>
  )
}

export default Caracter