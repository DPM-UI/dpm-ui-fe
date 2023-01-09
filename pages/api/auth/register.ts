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

    const { email, password } = req.body

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BE}/doorpathmain/register`,
            {
                email,
                password,
            }
        )

        setCookie({ res }, "jwt", response.data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        })

        res.status(200).json(response.data)
    } catch (e: any) {
        console.log(e.response.data)
        res.status(e.response.data.statusCode).json(e.response.data)
    }
}