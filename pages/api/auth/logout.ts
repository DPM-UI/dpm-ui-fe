import { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"
import { destroyCookie } from "nookies"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(405).end()
    }

    destroyCookie({ res }, "jwt", {
        path: "/",
    })

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BE}/doorpathmain/logout`
        )
        res.status(200).end()

    } catch (e: any) {
        console.log(e)
        res.status(500).json(e.response.data)
    }
}
