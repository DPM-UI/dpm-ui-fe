import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"



export default function handler(req: NextApiRequest, res: NextApiResponse) {


    const { slug } = req.query

    axios
        .get(
            `${process.env.NEXT_PUBLIC_API_ROOT}/ikm?npm=${slug ? slug[0] : 0}&fakultas=${slug ? slug[1] : ""}`
        )
        .then((response) => {


            res.status(200).json(response.data)
        })

        .catch((error) => res.status(500).send(error))
}

export const config = {
    api: {
        externalResolver: true,
    },
}