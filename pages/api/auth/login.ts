import { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"
import { setCookie } from "nookies"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(405).end()
    }

    const { username, password } = req.body

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BE}/doorpathmain/log-in`,
            {
                username,
                password,
            }
        )
        const jwt = response.headers["set-cookie"] ? response.headers["set-cookie"][0] : ""
        setCookie({ res }, "jwt", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        })

        res.status(200).json(response.data)
    } catch (e: any) {
        console.log(e)
        res.status(e.response.data.statusCode).json(e.response.data)
    }
}