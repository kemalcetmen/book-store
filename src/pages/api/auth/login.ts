import type { NextApiRequest, NextApiResponse } from 'next'

const { THE_URL = '' } = process.env;

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req

  const url = `${THE_URL}login`

  console.log(body)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body
  };
  fetch(url, options)
    .then(a => {
      console.log("a", a)
      console.log("astatus", a.status)
      if (a.status === 200) { return a.json() }
      else { return Error }
    })
    .then(json => {
      console.log("json", json)

      if (json.action_login.token) {
        res.status(200).json(json)
      }
      res.status(400).json(json)

    })
    .catch(err => console.error('error:' + err));
}