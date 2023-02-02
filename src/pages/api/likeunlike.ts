import type { NextApiRequest, NextApiResponse } from 'next'

const { THE_URL = '' } = process.env;

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    //IT DOESN'T WORK PERFECTLY BECAUSE THE LIKE INFORMATION DOES NOT COME TO THE SERVER
    
    const { body } = req

    const {token, user_id, product_id, liked} = body

    const url = `${THE_URL}${!liked ? "like" : "unlike"}`

    const options = {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`
        },
        body: `{"user_id":${user_id},"product_id":${product_id}}`
    };
    fetch(url, options)
        .then(response => {
            if (response.status === 200) { return response.json() }
            else { return Error }
        })
        .then(json => res.status(200).json(json))
        .catch(err => console.error('error:' + err));
}