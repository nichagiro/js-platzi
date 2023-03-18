import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth';
import authOptions from './auth/[...nextauth]';

const API = 'https://randomuser.me/api/';

async function getCaracters(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if(!session){
        res.status(401).json('Usuario no ha iniciado session')
    }
    fetch(API)
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error.message));
}

export default getCaracters
