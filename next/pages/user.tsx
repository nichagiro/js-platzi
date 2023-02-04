import Layout from '@layouts/Layout';

export async function getStaticProps() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json()
    return { props: { data } }
}

export default function Home({ data }: any) {

    return (
        <Layout >
            <div className='mt-3 d-flex justify-content-center'>
                <img src={data.results[0].picture.large} alt="5" />
            </div>
        </Layout >
    )
}
