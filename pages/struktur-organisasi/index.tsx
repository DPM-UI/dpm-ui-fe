import { Header, Footer, Navigation } from "@components";

import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const StrukturOrganisasi = ({ user }: { user: User }) => {
    return (
        <>
            <div className="mt-10 mobile:pb-24 desktop:pb-52 desktop:mx-20 mobile:mx-3">
                <Header preset="h1" className="text-blue-2 text-center">
                    Struktur Organisasi
                </Header>
                <img src="/assets/images/struktur-organisasi.png" className="w-full h-auto mt-8" />
                <div className="desktop:flex justify-between mobile:hidden">
                    <Navigation isLeft url="/dpm-ui" target="DPM UI 2022" />

                    <Navigation isLeft={false} url="/anggota-perwakilan" target="Anggota Perwakilan" />
                </div>
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
export default StrukturOrganisasi;
