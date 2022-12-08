import { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"
import nookies, { destroyCookie, parseCookies } from "nookies"

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

    res.status(200).end()


    // try {
    //     const response = await axios.post(
    //         `${process.env.NEXT_PUBLIC_API_BE}/doorpathmain/log-out`, {

    //         headers: {
    //             Cookie: ""
    //         }
    //     }
    //     )
    //     res.status(200).end()

    // } catch (e: any) {
    //     console.log(e)
    //     // res.status(500).json(e.response.data)
    // }
}
