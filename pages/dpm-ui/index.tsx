import { AboutDPM, NilaiDPM, FungsiDPM, Footer } from "@components";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const DPMUI = ({ user }: { user: User }) => {
    return (
        <>
            <div className="flex flex-col gap-12 items-center mt-8 mx-20">
                <AboutDPM />
                <NilaiDPM />
                <FungsiDPM />
            </div>
            <Footer user={user} />
        </>
    );
};
export const getServerSideProps = async (ctx: NextPageContext) => {
    const cookies = nookies.get(ctx);
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
        },
    };
};
export default DPMUI;
