import { AboutDPM, NilaiDPM, FungsiDPM, Footer, Navigation } from "@components";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const DPMUI = ({ user }: { user: User }) => {
    return (
        <>
            <div className="flex flex-col gap-12 items-center mt-8 desktop:mx-20 mobile:mx-5 desktop:mb-0 mobile:mb-10">
                <AboutDPM />
                <NilaiDPM />
                <FungsiDPM />
            </div>
            <div className="desktop:mb-14 mx-20 desktop:block mobile:hidden ">
                <Navigation target="Struktur Organisasi" url="/struktur-organisasi" isLeft={false} />
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
