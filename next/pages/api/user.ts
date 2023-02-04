import type { NextApiRequest, NextApiResponse } from 'next'

const API = 'https://randomuser.me/api/';

async function getCaracters(req: NextApiRequest, res: NextApiResponse) {
    fetch(API)
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error.message));
}

export default getCaracters