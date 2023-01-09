import { AnggotaShowcase, Header, Footer, Navigation } from "@components";
import { ANGGOTA_PERWAKILAN } from "@constants";

import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const AnggotaPerwakilan = ({ user }: { user: User }) => {
    return (
        <>
            {" "}
            <div className="mt-10 desktop:mb-0 mobile:mb-36">
                <Header preset="h1" className="text-blue-2 text-center">
                    Anggota Perwakilan
                </Header>

                <div className="flex flex-col desktop:gap-60 mobile:gap-24 mobile:mt-10 desktop:mt-32 desktop:mb-10 desktop:mx-20 mobile:mx-14">
                    {ANGGOTA_PERWAKILAN.map((anggota, index: number) => (
                        <div className={`${index % 3 == 0 ? "" : "hidden"} `} key={index}>
                            {index % 3 == 0 && (
                                <div key={index}>
                                    <AnggotaShowcase
                                        arrayAnggota={ANGGOTA_PERWAKILAN.slice(index, index + 3)}
                                        index={index}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-20 mt-36 mb-20 desktop:flex justify-between mobile:hidden">
                <Navigation target="Struktur Organisasi" url="/struktur-organisasi" isLeft />
                <Navigation target="Pengurus Inti" url="/pengurus-inti" isLeft={false} />
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
export default AnggotaPerwakilan;
