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


}
