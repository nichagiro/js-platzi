import Layout from '@layouts/Layout';

export async function getServerSideProps(context: any) {
    const res = await fetch('http://localhost:3000/api/user', {
        headers: {
            Cookie: context.req.headers.cookie
        }
    });
    const data = await res.json()
    return { props: { data } }
}

export default function Home({ data }: any) {
    return (
        <Layout >
            <div className='mt-3 d-flex justify-content-center'>
                <img src={data?.results[0].picture.large} alt="5" />
            </div>
        </Layout >
    )
}
