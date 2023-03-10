import type { NextApiRequest, NextApiResponse } from 'next'

const { THE_URL = '' } = process.env;

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const { category } = req.query

    const url = `${THE_URL}products/${category}`

    console.log(category)
    const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
    };
    fetch(url, options)
        .then(a => {
            // console.log("a", a)
            // console.log("astatus", a.status)
            if (a.status === 200) { return a.json() }
            else { return Error }
        })
        .then(json => {
            res.status(200).json(json)
            res.status(400).json(json)

            // console.log("json", json)
        })
        .catch(err => console.error('error:' + err));
}