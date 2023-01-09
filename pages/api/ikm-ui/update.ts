import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(403).end("Must use POST method!");
    }

    if (!req.body) {
        res.status(400).end("Must provide request body!");
    }
    const { id, jwt } = req.body;

    axios
        .post(
            `${process.env.NEXT_PUBLIC_API_BE}/ikm`,
            {
                id: id,
            },
            {
                headers: {

                    Cookie: jwt,
                },

            }
        )
        .then((response) => res.status(200).send(response.data))
        .catch((e) => res.status(500).send(e.response.data));
}

export const config = {
    api: {
        externalResolver: true,
    },
}