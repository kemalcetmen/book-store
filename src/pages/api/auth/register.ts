import type { NextApiRequest, NextApiResponse } from 'next'

const { THE_URl = '' } = process.env;

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req

  const url = `${THE_URl}register`

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
      if (json.action_register) {
        res.status(200).json(json)
      }
      res.status(400).json(json)

      console.log("json", json)
    })
    .catch(err => console.error('error:' + err));
}