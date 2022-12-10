import { StatusIKMDescription, CekStatusInput, Footer } from "@components";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";

const statusIkm = ({ user, jwt }: { user: User; jwt: string }) => {
    return (
        <>
            <div className="mt-10 pb-16 mx-20">
                <StatusIKMDescription user={user} jwt={jwt} />
                <CekStatusInput />
            </div>
            <Footer user={user} />
        </>
    );
};
export const getServerSideProps = async (ctx: NextPageContext) => {
    const cookies = nookies.get(ctx);
    const jwt = cookies.jwt ? cookies.jwt : "";
    let user = null;

    if (cookies?.jwt) {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BE}/doorpathmain`, {
                headers: {
                    Cookie: `${cookies.jwt}`,
                },
            });
            user = data;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        props: {
            user,
            jwt,
        },
    };
};
export default statusIkm;
